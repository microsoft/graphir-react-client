import { useEffect, useState, useCallback, useRef } from "react";
import {
  ApolloLink,
  HttpLink,
  InMemoryCache,
  ApolloClient,
} from "@apollo/client";
import { getAuthToken } from "../services/authTokenService";
import { graphirTokenRequest, graphirEndpoint } from "../authConfig";

function useGraphQl(apiFunc) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const func = useRef(apiFunc);

  const createApolloClient = async () => {
    const tokenResult = await getAuthToken(graphirTokenRequest);

    const httpLink = new HttpLink({ uri: graphirEndpoint.prod });

    const authLink = new ApolloLink((operation, forward) => {
      // Use the setContext method to set the HTTP headers.
      operation.setContext({
        headers: {
          authorization: tokenResult ? `Bearer ${tokenResult.accessToken}` : "",
        },
      });

      // Call the next link in the middleware chain.
      return forward(operation);
    });

    return new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });
  };

  const request = useCallback(
    async (data, options) => {
      const client = await createApolloClient();
      const result = await func.current(client, data, options);
      return result.data;
    },
    [func]
  );

  useEffect(() => {
    request()
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [request, setData, setError, setLoading]);

  return {
    data,
    error,
    loading,
  };
}

export { useGraphQl };
