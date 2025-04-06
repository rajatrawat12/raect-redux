import { combineReducers } from "redux";
import cakeReducer from "./cake/cakereducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import reducer from "./User/userReducer";
const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    user:reducer
   
})
export default rootReducer