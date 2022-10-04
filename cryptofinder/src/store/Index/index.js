import { configureStore } from "@reduxjs/toolkit";
import uiSlice from '../Slice/ui-slice';
import cartSlice from "../Slice/cart-slice";
import walletSlice from "../Slice/wallet-slice";
import authSlice from "../Slice/auth-slice";



const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        cart: cartSlice.reducer,
        wallet: walletSlice.reducer,
        auth: authSlice.reducer
    }
});

export default store;