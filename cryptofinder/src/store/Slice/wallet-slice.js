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

            // console.log(state.walletItems);
            //     const updatedTotalAmount = state.totalAmount + action.payload.price * action.payload.amount;
            //     const updatedTotalQuantities = state.quantities + action.payload.amount;

            //     const existingCartItemIndex = state.items.findIndex(
            //         (item) => item.id === action.payload.id
            //     );


            //     const existingCartItem = state.items[existingCartItemIndex];
            //     let updatedItems;
            //     if (existingCartItem) {
            //         const updatedItem = {
            //             ...existingCartItem,
            //             amount: existingCartItem.amount + action.payload.amount
            //         };
            //         updatedItems = [...state.items];
            //         updatedItems[existingCartItemIndex] = updatedItem;
            //     }
            //     else {
            //         updatedItems = state.items.concat(action.payload);
            //     }
            //     return {
            //         items: updatedItems,
            //         totalAmount: updatedTotalAmount,
            //         quantities: updatedTotalQuantities
            //     };
        },

    },

    extraReducers: {
        [fetchWalletData.fulfilled]: (state, action) => {
            state.walletItems = action.payload.newArr;
            state.quantities = action.payload.quantity;
            state.totalAmount = action.payload.totalPrice;
            // state.notifications = {
            // status: 'success',
            // title: 'Success!',
            // message: 'Cart data sent successfully!'
            // };
        },
        /*
        [sendCartData.rejected]: (state, action) => {
            state.notifications = {
                status: 'error',
                title: 'Error!',
                message: action.error.message || 'Fetch failed'
            };
        },
        [sendCartData.pending]: (state) => {
            state.notifications = {
                status: 'pending',
                title: 'Pending ...',
                message: 'Loading...'
            };
        }
        */
    }

});





export const walletActions = walletSlice.actions;


export default walletSlice;