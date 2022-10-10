import { configureStore } from "@reduxjs/toolkit";
import uiSlice from '../Slice/ui-slice';
import cartSlice from "../Slice/cart-slice";
import walletSlice from "../Slice/wallet-slice";
import authSlice from "../Slice/auth-slice";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
    key: "root",
    version: 1,
    storage
}


const reducer = combineReducers({
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
    wallet: walletSlice.reducer,
    auth: authSlice.reducer

})


const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;