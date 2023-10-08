export const msalConfig = {
  auth: {
    clientId: "28432df6-697d-4c44-97d0-c42d7fe39dc6",
    authority:
      "https://login.microsoftonline.com/2d784716-8b90-4b88-9bee-03249777a18e",
    redirectUri: "http://localhost:3000",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: ["User.Read"],
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};

// Add socpes here for graphir token request
export const graphirTokenRequest = {
  scopes: ["api://f0e9be33-2224-430d-a7b7-6e6c1ab69a29/user_impersonation"],
};

export const graphirEndpoint = {
  prod: "https://nq2f6brzexdbg-api.azurewebsites.net/graphql",
  dev: "https://localhost:5501/graphql",
};
