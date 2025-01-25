import { FETCH_USERS_FAILED, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./action";

const initialState = {
    users : [],
    isLoading : false
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {...state, isLoading : true}
        case FETCH_USERS_SUCCESS:
            return {...state, users : action.payload}
        case FETCH_USERS_FAILED:
            return {...state, users : []}
        default:
            return state
    }
}