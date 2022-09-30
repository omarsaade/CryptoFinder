import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCartData = createAsyncThunk(
    'ui/fetchData',
    async () => {
        const response = await fetch(`https://api.coinstats.app/public/v1/coins?skip=0&limit=50¤cy=USD`);
        if (!response.ok) throw new Error();
        const data = await response.json();
        return data.coins;
    }
);

