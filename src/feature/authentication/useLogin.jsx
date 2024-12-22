import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import toast from "react-hot-toast";
import { auth } from "./fireBase";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("User logged in successfully!");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { login, error, loading };
};
