import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import axiosInstance from "./axiosInstance";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: "saramiler18823",
    picture: "/profile.png",
    name: "Sara Miler",
    username: "johndoe",
    password: "johndoe123",
    email: "johndoe5584@domain.com",
    displayName: "Sara Miler",
    pseudonym: "John Travolta",
    company: "trendy solutions",
    bio: "",
    birthDate: "19.08.1980.",
    country: "USA",
    website: "www.trendy.solutions",
    phoneNumber: "855 154 3547",
    facebook: "",
    instagram: "",
    twitter: "",
    linkedln: "",
  });

  const login = async (username, password) => {
    try {
      const response = await axiosInstance.post("/api/auth/login", {
        username,
        password,
      });
      setUser({
        username,
        token: response.data.token,
      });
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
    } catch (error) {
      console.error("Authentication failed:", error);
    }
  };
  const updateUser = (newUserData) => {
    setUser((oldData) => ({
      ...oldData,
      ...newUserData,
    }));
  };
  const logout = () => {
    setUser(null);
    delete axiosInstance.defaults.headers.common["Authorization"];
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

/* Usage in a component
const LoginComponent = () => {
    const auth = useAuth();
    const handleLogin = () => {
        auth.login('user1', 'password123');
    };

    return <button onClick={handleLogin}>Log In</button>;
};

*/
