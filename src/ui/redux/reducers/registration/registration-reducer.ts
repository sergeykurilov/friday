import {DECREMENT, INCREMENT, SET_USERS} from "../../constants/constants";

const INITIAL_STATE = {
    count: 0,
    users: []
};

export const reducer = (state = INITIAL_STATE, action: any) => {

    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.users };
        case DECREMENT:
            return {...state,count: state.count - 1}
        case INCREMENT:
            return {
                ...state, count: state.count + 1,
            };
        default:
            return state;

    }
};

