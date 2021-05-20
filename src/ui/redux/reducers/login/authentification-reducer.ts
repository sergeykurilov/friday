import {ActionTypes} from "../../constants/constants";

const defaultState = {
    currentUser: {},
    isAuth: false
}

export default function userReducer(state = defaultState, action:any) {
    switch (action.type) {
        case ActionTypes.SET_USER:
            return {
                ...state,
                ...action.payload
            }
        case ActionTypes.LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                isAuth: false,
                user: {},
            }
        default:
            return state
    }
}


