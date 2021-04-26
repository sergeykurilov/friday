import {SET_USERS, USER_REGISTER} from "../constants/constants";


export function requestUsersAction(users:any) {
    return {
        type: SET_USERS,
        users
    };
}

export const userRegister = (isEmail:boolean,isPassValid: boolean) => ({
        type: USER_REGISTER, payload: {isEmail,isPassValid} } as const )

export const userRegisterLoading = (loading: boolean) => ({
    type: USER_REGISTER, payload: {loading} } as const )

export const userRegisterError = (error: string) => ({
    type: USER_REGISTER, payload: {error} } as const )