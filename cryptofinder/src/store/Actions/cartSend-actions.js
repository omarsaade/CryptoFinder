import { createAsyncThunk } from '@reduxjs/toolkit';
const firebaseUrl = 'https://crypto-44df7-default-rtdb.firebaseio.com';
// console.log("send");
export const sendCartData = createAsyncThunk(
    'cart/sendCartData',
    async (cart) => {
        console.log(cart);
        const config = {
            method: 'POST',
            body: cart,
            // body: JSON.stringify({
            // name: cart.name,
            // price: cart.price,
            // id: cart.id,
            // amount: cart.amount
            // })
        };
        const response = await fetch(`${firebaseUrl}/cart.json`, config);
        if (!response.ok) throw new Error();
    }
);