import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { isAuthenticated } from './index';
const NannyRoutes= () => {
  return (
    
        isAuthenticated() && isAuthenticated().user.role === 2 ? (
          <Outlet  />
        ) : (
          <Navigate to="/signin" />
        )
      
  );
};

export default NannyRoutes;
