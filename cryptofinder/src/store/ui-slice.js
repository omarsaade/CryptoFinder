import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    show: false,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleCart(state) {
            state.show = !state.show;
        }
    }
});

export const uiActions = uiSlice.actions;


export default uiSlice;