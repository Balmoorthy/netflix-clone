import PropTypes from "prop-types";
import { createContext, useState } from "react";

const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

LoadingProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { LoadingContext, LoadingProvider };
