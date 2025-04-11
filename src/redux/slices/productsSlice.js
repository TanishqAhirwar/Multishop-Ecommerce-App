import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        Products: []
    },
    reducers: {
        fetchFromApi: (state, action) => {
            state.Products = action.payload
        }
    }
})

export default productsSlice.reducer;