import React, { createContext, useState } from "react";

export interface contextInterface {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

interface props {
  children: JSX.Element;
}

export const loginContext = createContext<contextInterface | null>(null);

export const LoginProvider = (props: props) => {
  const { children } = props;
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const loginContextValue = {
    isLoggedIn,
    setIsLoggedIn,
  };
  return (
    <loginContext.Provider value={loginContextValue}>
      {children}
    </loginContext.Provider>
  );
};
