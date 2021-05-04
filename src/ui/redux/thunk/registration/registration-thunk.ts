import {registerAPI} from "../../../../server/api";
import {Dispatch} from "redux";
import {ActionsType} from "../../reducers/registration/registration-reducer";
import {userRegister, userRegisterError, userRegisterStatus} from "../../actions/actions";

export const userRegistrationTC = (regData: RegistrationRequestType) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(userRegisterStatus("loading"))
    return registerAPI.registerUsers({...regData})
        .then((res) => {
            console.log(res)
            dispatch(userRegister(true))
            dispatch(userRegisterStatus("succeeded"))
        })
        .catch((err) => {
            dispatch(userRegisterStatus("loading"))
            if (err.response.data.in === "createUser") {
                dispatch(userRegisterStatus("failed"))
                dispatch(userRegisterError(err.response.data.error))
            }
        })
}


export type RegistrationRequestType = {
    email: string
    password: string
    rememberMe: boolean
}

export type RegistrationResponseType = {
    addedUser: {
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

