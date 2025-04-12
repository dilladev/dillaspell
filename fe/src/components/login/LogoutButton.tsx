// components/LogoutButton.tsx
import React from "react";
import { useMsal } from "@azure/msal-react";

const LogoutButton: React.FC = () => {
  const { instance } = useMsal();

  const handleLogout = () => {
    localStorage.clear();
      sessionStorage.clear();
    instance.logoutRedirect({ postLogoutRedirectUri: window.location.origin, onRedirectNavigate: (url) => {
      // Return false if you would like to stop navigation after local logout
      return false;
  } });
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
