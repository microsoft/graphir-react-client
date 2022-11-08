export const msalConfig = {
  auth: {
    clientId: "ecbdb64f-6816-49df-97d1-345a06f8e050",
    authority:
      "https://login.microsoftonline.com/c2c1d092-cf24-4636-a284-203c93601579",
    redirectUri: "https://gray-ocean-04b8e500f.2.azurestaticapps.net",
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
