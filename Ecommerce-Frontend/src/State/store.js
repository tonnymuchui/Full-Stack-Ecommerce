import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { customerProductReducer } from "./Products/Reducer";

const rootReducers = combineReducers({
    auth: authReducer,
    products: customerProductReducer
})

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk));