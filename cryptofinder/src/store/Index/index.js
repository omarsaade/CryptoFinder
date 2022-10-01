import { configureStore } from "@reduxjs/toolkit";
import uiSlice from '../Slice/ui-slice';
import cartSlice from "../Slice/cart-slice";
import walletSlice from "../Slice/wallet-slice";



const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        cart: cartSlice.reducer,
        wallet: walletSlice.reducer
    }
});

export default store;