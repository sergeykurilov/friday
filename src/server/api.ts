import axios from "axios";


export const instance = axios.create({
    baseURL: "https://cards-nya-back.herokuapp.com/1.0/",
});

export const usersAPI = {
    getUsers() {
        return instance
            .get(`social/users`)
            .then((res) => res.data)
            .catch((err) => {
                return err.message
            })
    },
};
