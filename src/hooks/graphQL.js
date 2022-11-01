import { useEffect, useState, useCallback, useRef } from "react";
import {
  ApolloLink,
  HttpLink,
  InMemoryCache,
  ApolloClient,
} from "@apollo/client";
import { useMsalAuthentication } from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";
import { graphirTokenRequest, graphirEndpoint } from "../authConfig";

function useGraphQl(apiFunc) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [apolloClient, setApolloClient] = useState(null);
  const func = useRef(apiFunc);

  const { result } = useMsalAuthentication(
    InteractionType.Silent,
    graphirTokenRequest
  );

  useEffect(() => {
    if (result) {
      const httpLink = new HttpLink({ uri: graphirEndpoint.prod });

      const authLink = new ApolloLink((operation, forward) => {
        // Use the setContext method to set the HTTP headers.
        operation.setContext({
          headers: {
            authorization: result ? `Bearer ${result.accessToken}` : "",
          },
        });

        // Call the next link in the middleware chain.
        return forward(operation);
      });

      setApolloClient(
        new ApolloClient({
          link: authLink.concat(httpLink),
          cache: new InMemoryCache(),
        })
      );
    }
  }, [result, setApolloClient]);

  const request = useCallback(
    async (data, options) => {
      if (apolloClient) {
        const result = await func.current(apolloClient, data, options);
        return result.data;
      }
    },
    [func, apolloClient]
  );

  useEffect(() => {
    setLoading(true);
    request()
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [request, setData, setError, setLoading]);

  return {
    data,
    error,
    loading,
  };
}

export { useGraphQl };