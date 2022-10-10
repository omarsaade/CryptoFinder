import { createSlice } from "@reduxjs/toolkit";
// import { sendCartData } from "../Actions/cartSend-actions";


const initialState = {
    items: [],
    quantities: 0,
    totalAmount: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        updateCart(state, action) {
            // const updatedTotalAmount = state.totalAmount + action.payload.price * action.payload.amount;
            // const updatedTotalQuantities = state.quantities + action.payload.amount;
            // 
            // const existingCartItemIndex = state.items.findIndex(
            // (item) => item.id === action.payload.id
            // );
            // 
            // 
            // const existingCartItem = state.items[existingCartItemIndex];
            // let updatedItems;
            // if (existingCartItem) {
            // const updatedItem = {
            // ...existingCartItem,
            // amount: existingCartItem.amount + action.payload.amount
            // };
            // updatedItems = [...state.items];
            // updatedItems[existingCartItemIndex] = updatedItem;
            // }
            // else {
            // updatedItems = state.items.concat(action.payload);
            // }
            // return {
            // items: updatedItems,
            // totalAmount: updatedTotalAmount,
            // quantities: updatedTotalQuantities
            // };
        },

    },
});





export const cartActions = cartSlice.actions;


export default cartSlice;