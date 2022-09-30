import { createSlice } from "@reduxjs/toolkit";
import { fetchCartData } from "../Actions/crypto-actions";


const initialState = {
    show: false,
    search: "",
    crypto: [],
    notifications: []
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleCart(state) {
            state.show = !state.show;
        },
        setSearch(state, action) {
            state.search = action.payload;
        }
    },
    extraReducers: {
        [fetchCartData.fulfilled]: (state, action) => {
            state.crypto = action.payload;
            state.notifications = {
                status: 'success',
                title: 'Success!',
                message: 'Cart data sent successfully!'
            };
        },
        [fetchCartData.rejected]: (state, action) => {
            state.notifications = {
                status: 'error',
                title: 'Error!',
                message: action.error.message || 'Fetch failed'
            };
        },
        [fetchCartData.pending]: (state) => {
            state.notifications = {
                status: 'pending',
                title: 'Pending ...',
                message: 'Loading...'
            };
        }
    }
});

export const uiActions = uiSlice.actions;


export default uiSlice;