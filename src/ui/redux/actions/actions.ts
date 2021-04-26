import {ActionTypes, } from "../constants/constants";


// export function requestUsersAction(users:any) {
//     return {
//         type: ActionTypes.SET_USERS,
//         users
//     };
// }

export const userRegister = (isEmail:boolean,isPassValid: boolean) => ({
        type: ActionTypes.USER_REGISTER, payload: {isEmail,isPassValid} } as const )

export const userRegisterLoading = (loading: boolean) => ({
    type: ActionTypes.USER_REGISTER_LOADING, payload: {loading} } as const )

export const userRegisterError = (error: string) => ({
    type: ActionTypes.USER_REGISTER_ERROR, payload: {error} } as const )