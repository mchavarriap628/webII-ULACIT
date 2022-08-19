import { RESTAURANTE_LIST_FAIL, RESTAURANTE_LIST_SUCCESS } from "../constants/restauranteConstants";

//Lista todos los restaurantes
export const restauranteTodosReducer = (state = { restaurantes: [] }, action) => {
    switch (action.type) {
        case RESTAURANTE_LIST_SUCCESS:
            return { restaurantes: action.payload };
        case RESTAURANTE_LIST_FAIL:
            return { error: action.payload };

        default:
            return state;
    }
}