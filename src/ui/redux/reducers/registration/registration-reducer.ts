import {
    DECREMENT,
    INCREMENT,
    SET_USERS,
    USER_REGISTER,
    USER_REGISTER_LOADING,
    USER_REGISTER_ERROR
} from "../../constants/constants";
import {userRegister, userRegisterError, userRegisterLoading} from "../../actions/actions";

const INITIAL_STATE = {
    users: [],
    isEmail: false,
    isPassValid: false,
    loading: false,
    error: null
};

export const registrationReducer = (state = INITIAL_STATE, action: ActionsType) => {

    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.users };
        case USER_REGISTER:
            return {
                ...state, ...action.payload }
        case USER_REGISTER_LOADING:
            return {
                ...state, ...action.payload }
        case USER_REGISTER_ERROR:
            return {
                ...state, ...action.payload }
        default:
            return state;

    }
};

export type ActionsType = RegisterUserActionType | RegisterUserLoadingActionType | RegisterUserErrorActionType | any
type RegisterUserActionType = ReturnType<typeof userRegister>
type RegisterUserLoadingActionType = ReturnType<typeof userRegisterLoading>
type RegisterUserErrorActionType = ReturnType<typeof userRegisterError>

