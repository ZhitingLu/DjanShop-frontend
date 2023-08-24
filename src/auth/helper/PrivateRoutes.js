import React, { Component } from 'react';
import { Route, Navigate } from "react-router-dom";
import { isAuthenticated } from './index';


// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const PrivateRoutes = ({ children, ...rest }) => {
    return (
        <Route
            {...rest}
            render={({ props }) =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Navigate
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoutes;