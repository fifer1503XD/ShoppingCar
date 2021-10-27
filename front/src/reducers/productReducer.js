import { types } from "../types/types";

const initialState = {
    products: []
}
export const productReducer = (state = initialState, action) => {


    switch (action.type) {

        case types.ProductsData:
            return {
                ...state,
                products: action.payload,
            }
        case types.AddProduct:
            return {
                products: action.payload
                
            }
        default:
            return state;
    }

}