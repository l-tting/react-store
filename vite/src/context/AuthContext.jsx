import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    user: null,
  });
  const [loading, setLoading] = useState(true); // Initially, loading is true
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate an async check (loading state) to ensure localStorage is available
    const token = localStorage.getItem('access_token');

    if (token) {
      setAuth({ isAuthenticated: true, user: null });
    } else {
      setAuth({ isAuthenticated: false, user: null });
    }

    setLoading(false);  // After checking localStorage, loading state is false
  }, []);

  const login = (token) => {
    localStorage.setItem('access_token', token);
    setAuth({ isAuthenticated: true, user: null });
    
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    setAuth({ isAuthenticated: false, user: null });
    navigate('/login');
  };

  if (loading) {
    return <div>Loading...</div>; // Show a loading spinner or message while loading
  }

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
