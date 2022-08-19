import {
    RESTAURANTE_LIST_SUCCESS,
    RESTAURANTE_LIST_FAIL,
} from "../constants/restauranteConstants";
import axios from "axios";

export const listaRestaurantes = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`/api/notes`);

        dispatch({ type: RESTAURANTE_LIST_SUCCESS, payload: data });

    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        dispatch({ type: RESTAURANTE_LIST_FAIL, payload: message });
    }
};