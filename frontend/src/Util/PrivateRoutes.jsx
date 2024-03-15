import React, { useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please sign in first');
    }
  }, []);

  const token = localStorage.getItem('token');
  const tokenExpiration = token ? getTokenExpiration(token) : null;

  return token && tokenExpiration && tokenExpiration > Date.now() / 1000 ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" replace />
  );
};

const getTokenExpiration = (token) => {
  try {
    const decoded = JSON.parse(atob(token.split('.')[1]));
    return decoded.exp;
  } catch (error) {
    return null;
  }
};

export default PrivateRoutes;
