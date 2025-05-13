import { createSlice } from '@reduxjs/toolkit';

const selectedOrderSlice = createSlice({
    name: 'selectedOrder',
    initialState: null,
    reducers: {
        setSelectedOrder: (state, action) => action.payload,
        clearSelectedOrder: () => null,
    },
});

export const { setSelectedOrder, clearSelectedOrder } = selectedOrderSlice.actions;
export default selectedOrderSlice.reducer;
