import {put,call,takeEvery} from "redux-saga/effects";
import { types } from "../actions/types";
import {getAllUsers,getDetailsUser} from "../api/usersApi";




function* getUsers() {
    try {
        const user = yield call(getAllUsers);
        yield put({type:types.GET_ALL_USERS_SUCCESS,payload: user});
    }
    catch(err) {
        
    }
}





export default function* userSaga() {
    yield takeEvery (types.GET_ALL_USERS,getUsers);
    
}