import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import toast from "react-hot-toast";
import { auth } from "./fireBase";

export const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signUp = async (email, password) => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("User signed up successfully!");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { signUp, loading, error };
};
