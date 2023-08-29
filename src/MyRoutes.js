import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./core/Home";
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import Signup from "./user/Signup";
import UserDashboard from "./user/UserDashboard";

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                {/* Wrap PrivateRoutes around the UserDashboard Route */}
                <Route path="/user/dashboard" element={<PrivateRoutes component={UserDashboard} />} />
                 
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes;

