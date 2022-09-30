import { configureStore } from "@reduxjs/toolkit";
import uiSlice from '../Slice/ui-slice';
import cartSlice from "../Slice/cart-slice";


const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        cart: cartSlice.reducer
    }
});

export default store;