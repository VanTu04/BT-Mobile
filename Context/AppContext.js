import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  return (
    <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn, userEmail, setUserEmail }}>
      {children}
    </AppContext.Provider>
  );
};