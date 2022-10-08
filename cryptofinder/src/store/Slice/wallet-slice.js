import { createSlice } from "@reduxjs/toolkit";
import { fetchWalletData } from "../Actions/fetchcart-actions";


const initialState = {
    walletItems: [],
    quantities: 0,
    totalAmount: 0
};


const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        displayCart(state, action) {
        },

    },

    extraReducers: {
        [fetchWalletData.fulfilled]: (state, action) => {
            state.walletItems = action.payload.newArr;
            state.quantities = action.payload.quantity;
            state.totalAmount = action.payload.totalPrice;
        },
    }

});





export const walletActions = walletSlice.actions;


export default walletSlice;