import axios from "axios";
import {RegistrationRequestType, RegistrationResponseType} from "../ui/redux/thunk/registration/registration-thunk";

export const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0/",
});

export const registerAPI = {
    // getUsers() {
    //     return instance
    //         .get(`social/users`)
    //         .then((res) => res.data)
    //         .catch((err) => {
    //             return err.message
    //         })
    // },
   registerUsers(regData: RegistrationRequestType){
       return instance.post<RegistrationResponseType>(`auth/register`,{...regData})
   }
};

