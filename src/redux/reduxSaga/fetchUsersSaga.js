import axios from "axios";
import { call, put, select, takeLatest } from "redux-saga/effects";
import { FETCH_USERS_REQUEST, fetchUserFailed, fetchUserSuccess } from "./action";

const selectUsers = (state) => state

function* fetchUsersSaga({page}){
    console.log("action", page);
    
    try {
        const response = yield call(axios.get, `https://fakestoreapi.com/products?limit=${page}`);
        const previousUsers = yield select(selectUsers)
        console.log("previousUsers", previousUsers?.users);
       
        const mergeUsers = [...previousUsers?.users, ...response?.data]
        yield put(fetchUserSuccess(mergeUsers))
        
        // if(page === 1){
        //     yield put(fetchUserSuccess(response?.data))
        // } else {
        //     yield put(fetchUserSuccess(response?.data))
        // }
        
    } catch (error) {
        yield put(fetchUserFailed())
    }
}

export default function* fetchWatchUsers(){
    
    yield takeLatest(FETCH_USERS_REQUEST, fetchUsersSaga)
       
    
}