import { useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";

function useAuth(scopes) {
  const [accessToken, setAccessToken] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const { instance, account } = useMsal();

  useEffect(() => {
    const request = {
      ...scopes,
      account: account,
    };

    setLoading(true);

    instance
      .acquireTokenSilent(request)
      .then((response) => {
        setAccessToken(response.accessToken);
        setLoading(false);
      })
      .catch((error) => setError(error));
  }, [scopes, instance, account]);

  return { accessToken, loading, error };
}

export { useAuth };
