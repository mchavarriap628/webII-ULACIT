import { USER_LOGIN_FAIL, USER_LOGIN_LOGOUT, USER_LOGIN_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_SUCCESS } from "../constants/userConstants";

//Reducer para login
export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return { userInfo: action.payload };
        case USER_LOGIN_FAIL:
            return { error: action.payload };
        case USER_LOGIN_LOGOUT:
            return {};

        default:
            return state;
    }
}

//Reducer para registrar usuario nuevo
export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_SUCCESS:
            return { userInfo: action.payload };
        case USER_REGISTER_FAIL:
            return { error: action.payload };
        default:
            return state;
    }
};
