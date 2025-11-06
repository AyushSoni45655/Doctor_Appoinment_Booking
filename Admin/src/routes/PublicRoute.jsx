import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AContextt } from '../contexts/AdminContext';

const PublicRoute = ({ children }) => {
  const { token } = useContext(AContextt);

  // अगर token है, मतलब user logged in है, तो homepage पर redirect करो
  if (token) {
    return <Navigate to="/" replace />;
  }

  // नहीं तो Public page (जैसे SignIn या SignUp) दिखाओ
  return children;
};

export default PublicRoute;
