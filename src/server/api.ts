import axios from "axios";
import {RegistrationRequestType, RegistrationResponseType} from "../ui/redux/thunk/registration/registration-thunk";
import {LoginRequestType, LoginResponseType} from "../ui/redux/thunk/login/loginTh";
import {setUser} from "../ui/redux/actions/actions";


export const instance = axios.create({
    baseURL: `https://neko-back.herokuapp.com/2.0/`
});

export const registerAPI = {
    registerUsers(regData: RegistrationRequestType) {
        return instance.post<RegistrationResponseType>(`auth/register`, {...regData})
    }
};


export const loginAPI = {
    loginUser(loginData: LoginRequestType) {
        return instance.post<LoginResponseType>(`auth/login`, {...loginData}).then((res:any) => res.data)
    }
}


export const authAPI = () => {
    return async (dispatch: any) => {
        try {
            const response = await instance.post(`auth/me`,
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data.data))
            localStorage.setItem('token', response.data.data.token)

        } catch (e) {
            console.error(e)
            localStorage.removeItem('token')
        }
    }
}
