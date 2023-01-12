import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddCategory from './admin/AddCategory';
import AddProduct from './admin/AddProduct';
import ManageCategories from './admin/ManageCategories';
import ManageProducts from './admin/ManageProducts';
import UpdateProduct from './admin/UpdateProduct';
import AdminRoutes from './auth/helper/AdminRoutes';
import NannyRoutes from './auth/helper/NannyRoutes';
import PrivateRoutes from './auth/helper/PrivateRoutes';
import UserRoute from './auth/helper/UserRoute';
import Cart from './core/Cart';
import Home from './core/Home';
import NannyHome from './core/nannnyHome';
import OtpVerification from './core/OtpVerification';
import AdminDashBoard from './user/AdminDashBoard';
import NannySignup from './user/NannySignup';
import Signin from './user/Signin';
import Signup from './user/Signup';
import UserDashBoard from './user/UserDashBoard';
import UserOrNanny from './user/UserOrNanny';

const Routers = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route element={<UserRoute />}>
            <Route path="/" exact element={<Home />} />
          </Route>
          <Route path="/signin" exact element={<Signin />} />
          <Route path="/otpVerification" exact element={<OtpVerification />} />
          <Route path="/signup" exact element={<UserOrNanny />} />
          <Route path="/user/signup" exact element={<Signup />} />
          <Route path="/nanny/signup" exact element={<NannySignup />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/user/dashboard" exact element={<UserDashBoard />} />
          </Route>
          <Route element={<NannyRoutes />}>
            <Route path="/nanny/home" exact element={<NannyHome />} />
          </Route>
          <Route element={<AdminRoutes />}>
            <Route path="/admin/dashboard" exact element={<AdminDashBoard />} />
            <Route
              path="/admin/create/category"
              exact
              element={<AddCategory />}
            />
            <Route
              path="/admin/create/product"
              exact
              element={<AddProduct />}
            />
            <Route
              path="/admin/categories"
              exact
              element={<ManageCategories />}
            />
            <Route path="/admin/products" exact element={<ManageProducts />} />
            <Route
              path="/admin/product/update/:productId"
              exact
              element={<UpdateProduct />}
            />
          </Route>
          {/* <PrivateRoute path="/user/dashboard" exact element={<UserDashBoard />} />
          <AdminRoute path="/admin/dashboard" exact element={<AdminDashBoard />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routers;
