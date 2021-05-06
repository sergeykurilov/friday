import React from 'react';
import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom';
import {Login} from '../screens/Login/Login';
import Registration from '../screens/Registration/Registration';
import {PATH} from "../components/Nav/Navigation";
import {ResetPassword} from "../screens/ResetPassword/ResetPassword";
import {ForgotPassword} from "../screens/ForgotPassword/ForgotPassoword";

import {HomePage} from "../screens/HomePage/HomePage";

export default function Routing() {
    return (
        <div className="app-wrapper">
            <div className="app-wrapper-content">

                <HashRouter>
                    <Switch>
                        {/*<PrivateRoute component={HomePage} path={PATH.HOME}/>*/}
                        <Route exact
                               component={Login}
                               render={() => Login}
                               path={PATH.LOGIN}/>
                        <Route exact
                               component={HomePage}
                               path={PATH.HOME}/>
                        <Route exact
                               component={Registration}
                               path={PATH.REGISTER}/>
                        <Route
                            exact
                            path="/forgotpassword"
                            component={ForgotPassword}
                        />
                        <Route
                            exact
                            path="/set-new-password/:token"
                            component={ResetPassword}
                        />
                    </Switch>
                </HashRouter>
            </div>
        </div>
    )
}

