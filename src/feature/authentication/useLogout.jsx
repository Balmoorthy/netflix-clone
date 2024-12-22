import { signOut } from "firebase/auth";
import { useState } from "react";
import { auth } from "./fireBase";

export const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const logout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      console.log("User logged out successfully!");
    } catch (err) {
      console.error("Error logging out:", err.message);
    } finally {
      setLoading(false);
    }
  };

  return { logout, loading };
};
