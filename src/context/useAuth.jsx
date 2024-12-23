import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a DarkModeProvider");
  }
  return context;
}

export { useAuth };
