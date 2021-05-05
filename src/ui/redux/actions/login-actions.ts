import {ActionTypes,} from "../constants/constants";


export const login = ( isAuth: boolean) => ({
        type: ActionTypes.LOGIN, payload: {isAuth} } as const )

