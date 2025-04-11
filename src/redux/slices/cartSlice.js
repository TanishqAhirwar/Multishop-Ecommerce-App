import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartReducer = createSlice({
    name: "cart",
    initialState: {
        value: []
    },
    reducers: {
        addToCart: (state, action) => {
            const index = state.value.findIndex(item => item.id === action.payload.id)
            if (index < 0) {
                action.payload.quantity = action.payload.minimumOrderQuantity
                state.value.push(action.payload)
                toast.success('Item added to cart')
            }else{
                toast.warning('Item already in cart')
            }
        },
        removeFromCart: (state, action) => {
            state.value = state.value.filter(item => item.id !== action.payload)
            toast.warn('Item removed from cart')
        },

        incrementQuantity: (state, action) => {
            const index = state.value.findIndex(item => item.id === action.payload)
            state.value[index].quantity++
        },
        decrementQuantity: (state, action) => {
            const index = state.value.findIndex(item => item.id === action.payload)
            state.value[index].quantity--
        },
        clearCart: (state, action) => {
            state.value = []
        },

        cartFromApi: (state, action) => {
            state.value = action.payload
        }

    }
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart, cartFromApi } = cartReducer.actions;
export default cartReducer.reducer;