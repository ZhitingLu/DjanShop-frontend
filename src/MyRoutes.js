import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./core/Home";
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import Signup from "./user/Signup";
import UserDashboard from "./user/UserDashboard";
import Signin from "./user/Signin";


const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                {/* Wrap PrivateRoutes around the UserDashboard Route */}
                <Route path="/user/dashboard" element={<PrivateRoutes component={UserDashboard} />} />
                {/* <PrivateRoutes path="/user/dashboard" element={UserDashboard} /> */}
                 
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes;

