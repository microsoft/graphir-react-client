import { graphirTokenRequest } from "../authConfig";
import { getAuthToken } from "./authTokenService";

async function fetchAccounts() {
  const token = await getAuthToken(graphirTokenRequest);
  return token;
}

export { fetchAccounts };
