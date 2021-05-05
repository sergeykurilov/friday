import {ActionTypes,} from "../constants/constants";


export const login = (user: userType | undefined, isAuth: boolean) => ({
    type: ActionTypes.LOGIN, payload: {user,isAuth}
} as const)


export type userType = {
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
    token: string
    tokenDeathTime?: number
    __v?: number
    error?: string
}