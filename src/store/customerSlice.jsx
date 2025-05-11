import { createSlice } from '@reduxjs/toolkit';

const customerSlice = createSlice({
    name: 'customer',
    initialState: {
        phoneNumber: null,
        name: null,
    },
    reducers: {
        setPhoneNumber: (state, action) => {
            state.phoneNumber = action.payload;
        },
        setCustomerName: (state, action) => {
            state.name = action.payload;
        }
    }
});

export const { setPhoneNumber, setCustomerName } = customerSlice.actions;
export default customerSlice.reducer;
