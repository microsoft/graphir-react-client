// import "./App.css";
// import {
//   useMsalAuthentication,
//   AuthenticatedTemplate,
//   UnauthenticatedTemplate,
// } from "@azure/msal-react";
// import { InteractionType } from "@azure/msal-browser";
// import { loginRequest } from "./authConfig";
// import Authenticated from "./authenticated";
// import MainLayout from "./layout/mainLayout";

// function App() {
//   useMsalAuthentication(InteractionType.Redirect, loginRequest);

//   return (
//     <div className="App">
//       <MainLayout>
//         <AuthenticatedTemplate>
//           <Authenticated />
//         </AuthenticatedTemplate>
//         <UnauthenticatedTemplate>
//           <p>Please wait while you are signed in.</p>
//         </UnauthenticatedTemplate>
//       </MainLayout>
//     </div>
//   );
// }

// export default App;


import "./App.css";
import {
  useMsalAuthentication,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";
// import { loginRequest } from "./authConfig";
// import Authenticated from "./authenticated";
import MainLayout from "./layout/mainLayout";

function App() {
  // useMsalAuthentication(InteractionType.Redirect, loginRequest);

  return (
    <div className="App">
      <MainLayout>
        {/* <AuthenticatedTemplate>
          <Authenticated />
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <p>Please wait while you are signed in.</p>
        </UnauthenticatedTemplate> */}
      </MainLayout>
    </div>
  );
}

export default App;
