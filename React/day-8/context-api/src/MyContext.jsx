import { createContext, useState } from "react";

export let MyStore = createContext();

export let ContextProvider = ({ children }) => {
  console.log("context render...");
  const [gValue, setGValue] = useState(0);

  return (
    <MyStore.Provider value={{ gValue, setGValue }}>
      {children}
    </MyStore.Provider>
  );
};
