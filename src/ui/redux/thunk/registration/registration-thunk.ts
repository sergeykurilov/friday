import {usersAPI} from "../../../../server/api";
import {requestUsersAction} from "../../actions/actions";

export const requestUser = () => {
    return async (dispatch:any) => {
        let data = await usersAPI.getUsers();
        console.log(data)
        dispatch(requestUsersAction(data));
    };
};