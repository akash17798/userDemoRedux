import axios from "axios"
import { FETCH_USER_FAILED, FETCH_USER_SUCCESS, FETHING_USER } from "./actionType"

export const getUsers = () => {
    return async (dispatch) => {
        dispatch({type : FETHING_USER})
        try {
            const response = await axios.get('http://localhost:8080/dev/user/get');
            dispatch({type : FETCH_USER_SUCCESS, payload : response?.data?.data})
        } catch (error) {   
            dispatch({type : FETCH_USER_FAILED})
        }
    }
}