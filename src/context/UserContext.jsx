import React, { createContext, useContext, useEffect, useState } from "react";


const UserContext = createContext();


export const useUser = () => useContext(UserContext);


export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(
    () => localStorage.getItem("token") || null
  );


  const login = (userData) => {
    const fakeToken = "token123"; 
    localStorage.setItem("token", fakeToken);
    setToken(fakeToken);
  };


  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };


  const isAuthenticated = !!token;

  return (
    <UserContext.Provider value={{ token, login, logout, isAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};
