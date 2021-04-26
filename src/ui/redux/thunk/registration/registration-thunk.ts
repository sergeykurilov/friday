import {registerAPI} from "../../../../server/api";
import {Dispatch} from "redux";

export const requestUser = () => {
    return async (dispatch: Dispatch) => {

    };
}


// export const requestUser = () => {
//     return async (dispatch:any) => {
//         let data = await usersAPI.getUsers();
//         console.log(data)
//         dispatch(requestUsersAction(data));
//     };
// };