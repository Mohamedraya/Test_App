import {types} from "./types";


export function getUsers() {
    return {
        type: types.GET_ALL_USERS,
        
    };
}


export function getUsersSuccess(user) {
    return {
        type: types.GET_ALL_USERS_SUCCESS,
        payload: user
    };
}

export function getUsersFailure(error) {
    return {
        type: types.GET_ALL_USERS_FAILURE,
        payload: {},
        
    };
}