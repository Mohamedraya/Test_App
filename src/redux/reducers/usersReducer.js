import { types } from "../actions/types";

const initialState = {
    loading: false,
    users: [],
    
};


const usersReducer = (state = initialState, {type,payload}) => {

    switch (type) {
        case types.GET_ALL_USERS:
            
            return {
                ...state,

                loading: true,
            };

        case types.GET_ALL_USERS_SUCCESS:
            return{
                ...state,
                users: payload,
                loading: false,
            };
            
            case types.GET_ALL_USERS_FAILURE:
                return{
                    ...state,
                    users: {},
                    
                    loading: false
                };    
    
        default:
            return state;
    }
};

export default usersReducer;