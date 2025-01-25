import { all } from "redux-saga/effects";
import fetchWatchUsers from "./fetchUsersSaga";

export default function* rootSaga(){
    yield all([
        fetchWatchUsers(),
    ])
}