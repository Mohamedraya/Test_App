import {createStore,applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./src/redux/saga/index";
import rootReducer from "./src/redux/reducers/index";


const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,{},composeWithDevTools(applyMiddleware(sagaMiddleware)),);


sagaMiddleware.run(rootSaga);

export default store;