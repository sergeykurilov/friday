import {userRegister, userRegisterError, userRegisterLoading, userRegisterStatus} from "../../actions/actions";
import {ActionTypes} from "../../constants/constants";


const initialState = {
    email: "",
    password: "",
    status: 'loading' as RequestStatusType,
    isAuth: false,
    error: null as null | string
};

export const registrationReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case ActionTypes.USER_REGISTER:
            return {
                ...state, ...action.payload
            }
        case ActionTypes.USER_REGISTER_IS_AUTH:
            return {
                ...state, ...action.payload
            }
        case ActionTypes.USER_REGISTER_ERROR:
            return {
                ...state, ...action.payload
            }
        case ActionTypes.USER_REGISTER_STATUS:
            return {
                ...state, ...action.payload
            }
        default:
            return state;

    }
};

export type ActionsType = RegisterUserActionType
    | RegisterUserIsAuthActionType
    | RegisterUserErrorActionType
    | RegisterUserStatusActionType
type RegisterUserActionType = ReturnType<typeof userRegister>
type RegisterUserIsAuthActionType = ReturnType<typeof userRegisterLoading>
type RegisterUserErrorActionType = ReturnType<typeof userRegisterError>
type RegisterUserStatusActionType = ReturnType<typeof userRegisterStatus>

export type InitialStateType = typeof initialState
export type RequestStatusType = 'loading' | 'succeeded' | 'failed'