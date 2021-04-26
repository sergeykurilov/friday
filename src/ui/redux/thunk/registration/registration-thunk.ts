import {registerAPI} from "../../../../server/api";
import {Dispatch} from "redux";
import {ActionsType} from "../../reducers/registration/registration-reducer";

export const userRegistrationTC = (regData: RegistrationRequestType) => (dispatch: Dispatch<ActionsType>) => {

}

export type RegistrationRequestType = {
    email: string
    password: string
}

export type RegistrationResponseType = {
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number
    created: Date
    updated: Date
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
    error?: string
}

export type RegistrationUserErrorType = {
    response: {
        data: {
            emailRegExp: {}
            error: string
            in: string
            isEmailValid: boolean
            isPassValid: boolean
            passwordRegExp: string
        }
    }
}

// export const requestUser = () => {
//     return async (dispatch:any) => {
//         let data = await usersAPI.getUsers();
//         console.log(data)
//         dispatch(requestUsersAction(data));
//     };
// };