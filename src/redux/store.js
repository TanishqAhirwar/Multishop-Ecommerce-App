import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import userSlice from "./slices/userSlice";
import productsSlice from "./slices/productsSlice";

const store = configureStore({
    reducer : {
        cart : cartReducer,
        user : userSlice,
        products : productsSlice,
    }
})

export default store;