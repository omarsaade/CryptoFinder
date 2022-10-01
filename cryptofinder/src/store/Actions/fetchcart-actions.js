import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchWalletData = createAsyncThunk(
    'wallet/fetchWallet',
    async () => {
        const response = await fetch(`https://crypto-44df7-default-rtdb.firebaseio.com/cart.json`);
        if (!response.ok) throw new Error();
        const data = await response.json();
        console.log(data);
        return data;
    }
);

