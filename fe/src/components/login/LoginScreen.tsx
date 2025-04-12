// components/LoginScreen.tsx
import React from "react";
import { useMsal } from "@azure/msal-react";

const microsoftIcon =
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg";

const LoginScreen: React.FC = () => {
  const { instance } = useMsal();

  const handleLogin = () => {
    const loginRequest = {
        scopes: ["api://7dc2d5f4-77f4-49fc-b742-aaa30ca19be2/Read"]
      };
   
    const account = instance.getActiveAccount();
    if (!account) {
        instance.loginRedirect(loginRequest);
      instance.setActiveAccount(instance.getAllAccounts()[0]);
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h2 style={styles.title}><img src={'hyperspace.png'} style={styles.img}/> Hyperspace Login</h2>
        <button style={styles.button} onClick={handleLogin}>
          <img src={microsoftIcon} alt="Microsoft" style={styles.icon} />
          Sign in with Microsoft
        </button>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: "2rem",
    background: "rgba(0,0,0,0.5)",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    textAlign: "center",
    width: "320px",
  },
  title: {
    marginBottom: "1.5rem",
    fontSize: "1.5rem",
    fontWeight: 600,
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2F2F2F",
    border: '1px solid white',
    color: "#fff",
    border: "none",
    padding: "0.75rem 1rem",
    borderRadius: "8px",
    fontSize: "1rem",
    cursor: "pointer",
    gap: "10px",
    transition: "background-color 0.2s ease",
    width: "100%",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  },
  icon: {
    width: "20px",
    height: "20px",
    backgroundColor: "#fff",
    borderRadius: "3px",
    padding: "2px",
  },
  img:{
    width: '50px',
    display: "inline"
  }
};

export default LoginScreen;
