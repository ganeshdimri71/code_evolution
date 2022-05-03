import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
const store = configureStore({
    reducer: rootReducer
}
)
    
// window.store

export default store