import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { userReducer } from "./userReducer";
import rootSaga from "./rootSaga";

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(userReducer,applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

export default store;