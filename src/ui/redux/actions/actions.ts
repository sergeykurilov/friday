import {INCREMENT, DECREMENT, SET_USERS} from "../constants/constants";


export const Increase = () => {
    return {
        type: INCREMENT,
    };
};

export const Decrease = () => {
    return {
        type: DECREMENT,
    };
};

export function requestUsersAction(users:any) {
    return {
        type: SET_USERS,
        users
    };
}