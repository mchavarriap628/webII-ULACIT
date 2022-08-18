import {
    USER_LOGIN_FAIL,
    USER_LOGIN_LOGOUT,
    USER_LOGIN_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_SUCCESS
} from "../constants/userConstants";
import axios from "axios";

//Esta función hace el login, se está llamando en Login.js
export const login = (email, password) => async (dispatch) => {
    try {
        const config = { headers: { "Content-type": "application/json" } };
        const { data } = await axios.post('/api/users/login', { email, password, }, config);
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

//Esta función hace logout, se está llamando en Perfil.js
export const logout = () => async (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: USER_LOGIN_LOGOUT })
};

//Esta función regista un usuario en mongodb, es llamada en AgregarUsuario.js
export const register = (name, email, password, rol, salario, restaurante, estado) => async (dispatch) => {
    try {
        const config = { headers: { "Content-type": "application/json" } };
        const { data } = await axios.post(
            "/api/users",
            { name, email, password, rol, salario, restaurante, estado },
            config);

        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};