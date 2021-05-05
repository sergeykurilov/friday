import {ActionTypes, } from "../constants/constants";
import {RequestStatusType} from "../reducers/registration/registration-reducer";


// export function requestUsersAction(users:any) {
//     return {
//         type: ActionTypes.SET_USERS,
//         users
//     };
// }

export const userRegister = ( isRegistration: boolean) => ({
        type: ActionTypes.USER_REGISTER, payload: {isRegistration} } as const )

export const userRegisterError = (error: string) => ({
    type: ActionTypes.USER_REGISTER_ERROR, payload: {error} } as const )

export const userRegisterStatus = (status: RequestStatusType) => ({
    type: ActionTypes.USER_REGISTER_STATUS, payload: {status} } as const )

// currentUser: action.payload,
// isAuth: true

export const setUser = (user:any) => ({type: ActionTypes.SET_USER, payload: {user}})
export const isAuth = (isAuth: boolean) =>  ({type: ActionTypes.SET_USER, payload: {isAuth}})

export const logout = () => ({type: ActionTypes.LOGOUT})