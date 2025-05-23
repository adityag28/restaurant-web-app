import { createSlice } from "@reduxjs/toolkit";

const qrSlice = createSlice({
    name: "qr",
    initialState: {
        tableNumber: null,
    },
    reducers: {
        setQrTableNumber: (state, action) => {
            state.tableNumber = action.payload;
        },
    },
});

export const { setQrTableNumber } = qrSlice.actions;
export default qrSlice.reducer;
