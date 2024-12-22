import { useContext } from "react";
import { LoadingContext } from "./LoadingProvider";

function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoading must be used within a DarkModeProvider");
  }
  return context;
}

export { useLoading };
