import { types } from "../types/types";

const initialState = {
    numberProducts: 0,
    detailProducts: []
}
export const carReducer = (state = initialState, action) => {


    switch (action.type) {

        case types.CarAddProduct:
            return {
                ...state,
                detailProducts: [...state.detailProducts, action.payload],
            }
        case types.CarAddProductExist:
            return {
                ...state,
                detailProducts: action.payload,
            }
        case types.CarNumberOfProducts:
            return {
                ...state,
                numberProducts:action.payload,
            }
        default:
            return state;
    }

}