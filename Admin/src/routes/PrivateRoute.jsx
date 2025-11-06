import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AContextt } from '../contexts/AdminContext';

const PrivateRoute = ({ children }) => {
  const { token } = useContext(AContextt);

  if (!token) {
    // अगर token नहीं है तो SignIn page पर redirect करो
    return <Navigate to="/signin" replace />;
  }

  // अगर token है तो protected component दिखाओ
  return children;
};

export default PrivateRoute;
