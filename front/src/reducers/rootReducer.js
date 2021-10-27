import { combineReducers } from "redux";
import { carReducer } from "./carReducer";
import { productReducer } from "./productReducer";
export const rootReducer = combineReducers({
    car : carReducer,
    product:productReducer
})