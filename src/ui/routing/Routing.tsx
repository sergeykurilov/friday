import React, {useEffect} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Login from '../screens/Login/Login';
import Registration from '../screens/Registration/Registration';
import {PATH} from "../components/Nav/Navigation";
import {ResetPassword} from "../screens/ResetPassword/ResetPassword";
import {ForgotPassword} from "../screens/ForgotPassword/ForgotPassoword";

import {HomePage} from "../screens/HomePage/HomePage";
import {useDispatch, useSelector} from "react-redux";

import PrivateRoute from "./Private";
// import {auth} from "../../server/api";

export default function Routing() {
    const isAuth = useSelector((state: any) => state.authorization.isAuth)
    const user = useSelector((state:any) => state.authorization.user)
    const dispatch = useDispatch()
    //


    return (
        <div className="app-wrapper">
            <div className="app-wrapper-content">

                <BrowserRouter>
                    <Switch>
                        {/*<PrivateRoute component={HomePage} path={PATH.HOME}/>*/}
                        <Route exact component={Login} path={PATH.LOGIN}/>
                        <Route exact component={HomePage} path={PATH.HOME}/>
                        <Route exact component={Registration} path={PATH.REGISTER}/>
                        <Route
                            exact
                            path="/forgotpassword"
                            component={ForgotPassword}
                        />
                        <Route
                            exact
                            path="/passwordreset/:token"
                            component={ResetPassword}
                        />
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    )
}

