import { msalInstance } from "../index";

async function getAuthToken(scopes) {
  // Default to using the first account if no account is active on page load
  if (
    !msalInstance.getActiveAccount() &&
    msalInstance.getAllAccounts().length > 0
  ) {
    // Account selection logic is app dependent. Adjust as needed for different use cases.
    msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
  }

  const activeAccount = msalInstance.getActiveAccount();

  const request = {
    ...scopes,
    account: activeAccount,
  };

  var response = await msalInstance.acquireTokenSilent(request);

  return response;
}

export { getAuthToken };
