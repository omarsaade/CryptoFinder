import { createAsyncThunk } from '@reduxjs/toolkit';
const firebaseUrl = 'https://crypto-44df7-default-rtdb.firebaseio.com';
export const sendCartData = createAsyncThunk(
    'cart/sendCartData',
    async (cart) => {
        const config = {
            method: 'POST',
            body: JSON.stringify({
                name: cart.name,
                price: cart.price,
                id: cart.id,
                amount: cart.amount
            })
        };
        // console.log(cart);
        const response = await fetch(`${firebaseUrl}/cart.json`, config);
        if (!response.ok) throw new Error();
        // const data = await response.json();



    }
);