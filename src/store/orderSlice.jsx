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
        setSelectedOrder: (state, action) => {
            state.currentOrder = action.payload;
        },
    },
});

export const { setOrder, clearOrder, setSelectedOrder } = orderSlice.actions;
export default orderSlice.reducer;
