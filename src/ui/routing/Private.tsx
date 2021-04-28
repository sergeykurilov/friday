import React, {Component} from "react";
import { Redirect, Route } from "react-router-dom";


const PrivateRoute = ({ component: Component, ...rest }: any) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                localStorage.getItem("token") ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default PrivateRoute;