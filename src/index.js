// import React from "react";
// import ReactDOM from "react-dom/client";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { PublicClientApplication } from "@azure/msal-browser";
// import { MsalProvider } from "@azure/msal-react";
// import { msalConfig } from "./authConfig";

// export const msalInstance = new PublicClientApplication(msalConfig);

// // Default to using the first account if no account is active on page load
// if (
//   !msalInstance.getActiveAccount() &&
//   msalInstance.getAllAccounts().length > 0
// ) {
//   // Account selection logic is app dependent. Adjust as needed for different use cases.
//   msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <MsalProvider instance={msalInstance}>
//       <App />
//     </MsalProvider>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



// Remove the authentication

import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

