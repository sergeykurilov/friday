import {registerAPI} from "../../../../server/api";
import {Dispatch} from "redux";
import {ActionsType} from "../../reducers/registration/registration-reducer";
import {userRegister, userRegisterError, userRegisterStatus} from "../../actions/actions";

/*export const userRegistrationTC = (regData: RegistrationRequestType) => (dispatch: Dispatch<ActionsType>) => {
   dispatch(userRegisterStatus("loading"))
    registerAPI.registerUsers({...regData})
        .then((res) => {
            dispatch(userRegister(res.data))
            dispatch(userRegisterStatus("succeeded"))
        })
        .catch((err) => {
            dispatch(userRegisterStatus("loading"))
            if(err.response.data.in === "createUser"){
                dispatch(userRegisterStatus("failed"))
                dispatch(userRegisterError(err.response.data.error))
            }
        })
}*/

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