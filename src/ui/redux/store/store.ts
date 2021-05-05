import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {registrationReducer} from "../reducers/registration/registration-reducer";
import {loginReducer} from "../reducers/registration/login-reducer";

const rootReducer = combineReducers({
    registration: registrationReducer,
    login: loginReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk));

// @ts-ignore
window.__store__ = store;
