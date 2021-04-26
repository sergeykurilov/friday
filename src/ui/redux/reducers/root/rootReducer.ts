import { combineReducers } from 'redux';
import {reducer} from "../registration/registration-reducer";

const rootReducer = combineReducers({
    register: reducer,
});

export default rootReducer;