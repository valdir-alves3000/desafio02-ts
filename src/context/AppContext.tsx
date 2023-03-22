import { createContext, ReactNode, useEffect, useState } from "react";
import { getAllLocalStorage } from "../services/storage";

interface AppContextProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContext = createContext({} as AppContextProps);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const storage = getAllLocalStorage();

  useEffect(() => {
    if (storage) {
      const { login } = JSON.parse(storage);
      setIsLoggedIn(login);
    }
  }, []);

  return (
    <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
};
