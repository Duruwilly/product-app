"use client"

import { createContext, useContext, useState } from "react";

type TAppContext = {
  demoValue: string;
};

const AppContext = createContext<TAppContext | null>(null);

const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [demoValue, setDemoValue] = useState("Hello here");

  return (
    <AppContext.Provider
      value={{
        demoValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext) as TAppContext;

export default AppContextProvider;
