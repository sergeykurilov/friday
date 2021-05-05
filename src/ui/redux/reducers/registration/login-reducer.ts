import {ActionTypes} from "../../constants/constants";
import {login} from "../../actions/login-actions";


const initialState = {
    isAuth: false,

};

export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case ActionTypes.LOGIN:
            return {
                ...state, ...action.payload
            }
        default:
            return state;

    }
};

export type ActionsType = LoginActionsType
type LoginActionsType = ReturnType<typeof login>

export type InitialStateType = typeof initialState
