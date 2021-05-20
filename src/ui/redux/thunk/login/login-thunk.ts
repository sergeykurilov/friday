import {loginAPI} from "../../../../server/api";
import {logout, setUser} from "../../actions/regisration-actions";
import {Dispatch} from "redux";
import {login, userType} from "../../actions/login-actions";


export const loginTC = ({...loginData}: LoginRequestType) => {
    return async (dispatch: Dispatch<LoginActionsType>) => {
        dispatch(login(undefined, false))
        loginAPI.loginUser({...loginData}).then((res: userType) => {
            dispatch(login(res, true))
            localStorage.setItem('token', res.token)
        })
    }
}

export const logoutTC = () => {
    return async (dispatch: Dispatch<LoginActionsType>) => {
        dispatch(login(undefined, false))
        loginAPI.meDelete().then((res) => {
            console.log(res)
            dispatch(logout())
            localStorage.removeItem('token')
        })
    }
}


export const setAuthUserData = () => async (dispatch: Dispatch<LoginActionsType>) => {
    let data = await loginAPI.me();
    if (localStorage.getItem("token")) {
        dispatch(login(data, false))
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