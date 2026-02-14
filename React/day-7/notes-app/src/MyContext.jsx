import { createContext, useState } from "react";

export let MyStore = createContext();

export let ContextProvider = ({ children }) => {
  const [users, setUsers] = useState({
    name: "rahul",
  });

  return (
    <MyStore.Provider value={{ users, setUsers }}>{children}</MyStore.Provider>
  );
};
