import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from '../screens/Login/Login';
import Registration from '../screens/Registration/Registration';
import {PATH} from "../components/Nav/Navigation";
import {RecoveryPassword} from "../screens/RecoveryPassword/RecoveryPassword";


export default function Routing() {
    return (
        <div className="app-wrapper">
            <div className="app-wrapper-content">
                <BrowserRouter>
                    <Switch>
                        <Route exact component={Login} path={PATH.DEFAULT}/>
                        <Route exact component={Registration} path={PATH.REGISTER}/>
                        <Route exact component={RecoveryPassword} path={PATH.REGISTER}/>
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    )
}

