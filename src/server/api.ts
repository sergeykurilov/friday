import axios from "axios";
import {RegistrationRequestType, RegistrationResponseType} from "../ui/redux/thunk/registration/registration-thunk";
import {LoginRequestType, LoginResponseType} from "../ui/redux/thunk/login/login-thunk";


export const instance = axios.create({
    withCredentials: true,
    baseURL: "https://neko-back.herokuapp.com/2.0/",
});

export const registerAPI = {
    registerUsers(regData: RegistrationRequestType) {
        return instance.post<RegistrationResponseType>(`auth/register`, {...regData})
    }
};


export const loginAPI = {
    loginUser(loginData: LoginRequestType) {
        return instance.post<LoginResponseType>(`auth/login`, {...loginData}).then((res:any) => res.data)
    },
    me() {
        return instance
            .post<any>(`auth/me`, {})
            .then((response) => {
                console.log(response)
                return response.data;
            });
    }
}
// export const auth =  () => {
//     return async (dispatch:any) => {
//         try {
//             const response: any = await instance.post(`/auth/me`, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
//             dispatch(response)
//             console.log(response)
//             localStorage.setItem('token', response.data.in)
//         }
//         catch (error) {
//             console.log(error)
//         }
//     }
// }