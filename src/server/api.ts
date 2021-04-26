import axios from "axios";

export const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0/",
});

export const registerAPI = {
    getUsers() {
        return instance
            .get(`social/users`)
            .then((res) => res.data)
            .catch((err) => {
                return err.message
            })
    },
   registerUsers(){
        return instance
            .post(`auth/register`)
            .then(res => res.data)
            .catch(err => err.message)
   }
};

