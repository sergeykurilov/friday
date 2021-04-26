import {userRegister, userRegisterError, userRegisterLoading} from "../../actions/actions";
import {ActionTypes} from "../../constants/constants";


const initialState: InitialStateType = {
    isEmail: false,
    isPassValid: false,
    loading: false,
    error: null as null | string
};

export const registrationReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case ActionTypes.USER_REGISTER:
            return {
                ...state, ...action.payload }
        case ActionTypes.USER_REGISTER_LOADING:
            return {
                ...state, ...action.payload }
        case ActionTypes.USER_REGISTER_ERROR:
            return {
                ...state, ...action.payload }
        default:
            return state;

    }
};

export type ActionsType = RegisterUserActionType | RegisterUserLoadingActionType | RegisterUserErrorActionType
type RegisterUserActionType = ReturnType<typeof userRegister>
type RegisterUserLoadingActionType = ReturnType<typeof userRegisterLoading>
type RegisterUserErrorActionType = ReturnType<typeof userRegisterError>
export type InitialStateType = {
    isEmail: boolean
    isPassValid: boolean
    loading: boolean
    error: null | string
}
