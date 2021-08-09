import React from 'react';
import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom';
import {Login} from '../screens/Login/Login';
import Registration from '../screens/Registration/Registration';
import {Navigation, PATH} from "../components/Nav/Navigation";
import {ResetPassword} from "../screens/ResetPassword/ResetPassword";
import {ForgotPassword} from "../screens/ForgotPassword/ForgotPassoword";

import {HomePage} from "../screens/HomePage/HomePage";
import Packs from "../screens/Packs/Packs";
import {Cards} from "../screens/Cards/Cards";
import {useSelector} from "react-redux";
import {RootStateType} from "../redux/store/store";

export default function Routing() {
    const isAuth = useSelector((state:RootStateType) => state.login.isAuth)
    ///asdadsadsadaddsadsa
    return (
        <div className="app-wrapper">
            <div className="app-wrapper-content">

                <HashRouter>
                    <Navigation/>
                    <Switch>
                        <Route exact
                               component={Login}
                               path={PATH.LOGIN}/>
                        <Route exact
                               component={HomePage}
                               path={PATH.HOME}/>
                        <Route exact
                               component={Registration}
                               path={PATH.REGISTER}/>
                        <Route
                            exact
                            path={PATH.FORGOT}
                            component={ForgotPassword}
                        />
                        <Route
                            exact
                            path={PATH.PACKS}
                            component={Packs}
                        />
                        <Route
                            exact
                            path={"/cards/:_id"}
                            component={Cards}
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

