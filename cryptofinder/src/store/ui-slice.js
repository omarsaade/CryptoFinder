import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    crypto: [],
    search: ''
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        display(state, action) {
            state.crypto = action.payload;
        },
        puto(state, action) {
            state.search += action.payload;
        }
    }
});

export const uiActions = uiSlice.actions;


export default uiSlice;