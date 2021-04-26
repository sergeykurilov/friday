import { combineReducers } from 'redux';
import {registrationReducer} from "../registration/registration-reducer";

const rootReducer = combineReducers({
    register: registrationReducer,
});

export default rootReducer;