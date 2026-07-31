import { createRoot } from "react-dom/client";
import "./index.css";
import { AppProvider } from "./context/AppContext";
import App from "./App";
export const server = "https://ai-career-backend-bvmn.onrender.com";

import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")!).render(
  <AppProvider>
    <GoogleOAuthProvider clientId="29635727522-saph8e3gcramjttppifbhsclvl0qc7ih.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </AppProvider>,
);
