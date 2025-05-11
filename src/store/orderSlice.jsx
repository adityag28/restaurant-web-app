import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentOrder: null,
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setOrder: (state, action) => {
            state.currentOrder = action.payload;
        },
        clearOrder: (state) => {
            state.currentOrder = null;
        },
    },
});

export const { setOrder, clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
