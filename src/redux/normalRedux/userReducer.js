import { FETCH_USER_FAILED, FETCH_USER_SUCCESS, FETHING_USER } from "./actionType";

const initialState = {
    isLoading : false,
    users :[]
}

export const userReducer = (state = initialState, action) => {
     switch (action.type) {
        case FETHING_USER:
            return {
                ...state,
                isLoading : true
            }
        case FETCH_USER_SUCCESS : 
            return {
                ...state,
                isLoading: false,
                users : action.payload
            }
        case FETCH_USER_FAILED : 
            return {
                ...state,
                isLoading : false,
            }
     
        default:
            return state;
     }   
}