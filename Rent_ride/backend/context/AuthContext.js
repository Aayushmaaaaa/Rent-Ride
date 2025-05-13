import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check token on mount
  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("authToken");
      if (token) {
        try {
          const response = await axios.get(
            "http://localhost:5000/api/auth/verify",
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          setIsLoggedIn(true);
          setUser(response.data.user);
        } catch (err) {
          console.error("Token verification failed:", err);
          localStorage.removeItem("authToken");
          setIsLoggedIn(false);
          setUser(null);
        }
      }
      setLoading(false);
    };
    verifyToken();
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );
      localStorage.setItem("authToken", response.data.token);
      setIsLoggedIn(true);
      setUser(response.data.user);
      return response.data;
    } catch (err) {
      throw err.response?.data?.msg || "Login failed";
    }
  };

  // Signup function
  const signup = async (name, email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        {
          name,
          email,
          password,
        }
      );
      localStorage.setItem("authToken", response.data.token);
      setIsLoggedIn(true);
      setUser(response.data.user);
      return response.data;
    } catch (err) {
      throw err.response?.data?.msg || "Signup failed";
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, user, loading, login, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
