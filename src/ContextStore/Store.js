import { createContext, useContext, useState } from "react";

// Create the context
export const SangeetContext = createContext();

// Create the provider component
export const SangeetProvider = ({ children }) => {
  // State
  const [state, setState] = useState("Sumit Context");

  // Functions
  function myfunc() {
    return "Sumit";
  }

  // Value to be passed to context consumers
  const exportValue = {
    state,
    myfunc,
  };

  return (
    <SangeetContext.Provider value={exportValue}>
      {children}
    </SangeetContext.Provider>
  );
};

// Custom hook to use the context
export const useSangeetContext = () => {
  const context = useContext(SangeetContext);
  if (!context) {
    throw new Error("useSangeetContext must be used within a SangeetProvider");
  }
  return context;
};
