import { useEffect, useState, useCallback } from "react";
import {
  ApolloLink,
  HttpLink,
  InMemoryCache,
  ApolloClient,
} from "@apollo/client";
import { useMsal, useAccount } from "@azure/msal-react";
import { graphirTokenRequest, graphirEndpoint } from "../authConfig";

function useGraphQl(apiFunc, args) {
  const [data, setData] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [apolloClient, setApolloClient] = useState(null);
  const deps = args ? [...args] : [];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const func = useCallback(apiFunc, deps);

  const request = useCallback(
    async (data, options) => {
      if (apolloClient) {
        const result = await func(apolloClient, data, options);
        return result.data;
      }
    },
    [func, apolloClient]
  );

  const { instance, accounts } = useMsal();
  const account = useAccount(accounts[0] || {});

  useEffect(() => {
    if (account) {
      instance
        .acquireTokenSilent({
          ...graphirTokenRequest,
          account: account,
        })
        .then((response) => {
          if (response) setAccessToken(response.accessToken);
        });
    }
  }, [account, instance]);

  useEffect(() => {
    if (accessToken) {
      const httpLink = new HttpLink({ uri: graphirEndpoint.prod }); // switch to 'dev' for local graphir

      const authLink = new ApolloLink((operation, forward) => {
        // Use the setContext method to set the HTTP headers.
        operation.setContext({
          headers: {
            authorization: accessToken ? `Bearer ${accessToken}` : "",
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
  }, [accessToken, setApolloClient]);

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
    request,
  };
}

export { useGraphQl };