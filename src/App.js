import "./App.css";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./auth/signin";
import Authenticated from "./authenticated";
import MainLayout from "./layout/mainLayout";

function App() {
  const isAuthenticated = useIsAuthenticated();

  return (
    <div className="App">
      <MainLayout>
        {!isAuthenticated && <SignInButton />}
        {isAuthenticated && <Authenticated />}
      </MainLayout>
    </div>
  );
}

export default App;
