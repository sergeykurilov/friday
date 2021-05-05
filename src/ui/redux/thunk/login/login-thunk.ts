import {instance, loginAPI} from "../../../../server/api";
import {isAuth, logout, setUser, userRegister, userRegisterError, userRegisterStatus} from "../../actions/regisration-actions";
import {Dispatch} from "redux";
/*
avatar: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAA
created: "2020-06-19T17:38:50.679Z"
email: "nya-admin@nya.nya"
isAdmin: false
name: "dreamonautre@gmail.com"
publicCardPacksCount: 190
rememberMe: false
token: "7530e700-a819-11eb-b991-8f0e2b993f4c"
tokenDeathTime: 1619622085872
updated: "2021-04-28T12:01:25.872Z"
verified: false
__v: 0
_id: "5eecf82a3ed8f700042f1186"
*/



export const loginTC = ({...loginData}: LoginRequestType) => {
    return async (dispatch: Dispatch<LoginActionsType>) => {
        dispatch(isAuth(false))
        loginAPI.loginUser({...loginData}).then((res:any) => {
            console.log(res)
            dispatch(isAuth(true))
            dispatch(setUser(res))
            localStorage.setItem('token', res.token)
        })
    }
}

export const setAuthUserData = () => async (dispatch:any) => {
    let data = await loginAPI.me();
    if (localStorage.getItem("token")) {
        dispatch(setUser(data));
    }
};

// export const authTC = () => {
//     return async (dispatch: Dispatch<LoginActionsType>) => {
//         dispatch(isAuth(false))
//         loginAPI.me().then((res:any) => {
//             try {
//                 console.log(res)
//                 dispatch(setUser(res))
//                 localStorage.setItem('token', res.token)
//             }catch (e:any) {
//                 console.error(e.res.data.error)
//                 localStorage.removeItem('token')
//             }
//         })
//     }
// }



export type LoginActionsType = LoginActionType
    | LogOutActionType
type LoginActionType = ReturnType<typeof setUser>
type LogOutActionType = ReturnType<typeof logout>
export type LoginRequestType = {
    email: string
    password: string
    rememberMe: boolean
}
export type RequestLoginStatusType = 'loading' | 'succeeded' | 'failed'
export type LoginResponseType = {
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