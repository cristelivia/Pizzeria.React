import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(
    () => localStorage.getItem("token") || null
  );
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 


 const login = async (userData) => {
   try {
     const response = await axios.post(
       "http://localhost:5000/api/auth/login",
       userData
     );

     const { token } = response.data;

     if (!token) {
       throw new Error("Token no recibido del servidor.");
     }

     console.log("✅ Token recibido:", token);
     localStorage.setItem("token", token);
     setToken(token);


     await fetchUserProfile();
   } catch (error) {
     console.error("❌ Error al hacer login:", error);
     throw error; 
   }
 };


  

  // Función para hacer logout
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  // Función para obtener el perfil del usuario
  const fetchUserProfile = async () => {
    if (!token) {
      console.log("❌ No hay token para autenticar");
      setLoading(false);
      return;
      setUser(response.data); // <- debe devolver al menos el email
    }

    try {
      const response = await axios.get("/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("👤 Perfil cargado:", response.data);
      setUser(response.data);
    } catch (error) {
      console.error("❌ Error al obtener perfil:", error);
      logout();
    } finally {
      setLoading(false);
    }
  };


  // Cargar perfil del usuario cuando el token cambie
useEffect(() => {
  if (token) {
    fetchUserProfile();
  } else {
    setUser(null);
    setLoading(false);
  }
}, [token]);

  const isAuthenticated = !!token; 

  return (
    <UserContext.Provider
      value={{
        token,
        user,
        isAuthenticated,
        login,
        logout,
        loading, 
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
