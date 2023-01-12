import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { isAuthenticated } from './index';
const UserRoute= () => {
  return (
    
        isAuthenticated() && isAuthenticated().user.role !== 2 ? (
          <Outlet  />
        ) : (
          <Navigate to="/signin" />
        )
      
  );
};

export default UserRoute;
