import {INCREMENT} from "../constants/constants";


export const Increase = () => {
    return {
        type: INCREMENT,
    };
};

export function requestUsersAction(users:any) {
    return {
        type: "SET_USERS",
        users
    };
}