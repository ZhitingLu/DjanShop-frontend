import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./core/Home";
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import Signup from "./user/Signup";

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                {/* <PrivateRoutes path="/user/dashboard" exact element={} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes;

