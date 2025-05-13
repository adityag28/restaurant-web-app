import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userData: null,
        role: null,
    },
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload;
        },
        setUserRole: (state, action) => {
            state.role = action.payload;
        },
        logoutUser: (state) => {
            state.userData = null;
            state.role = null;
        },
    },
});

export const { setUserData, setUserRole, logoutUser } = userSlice.actions;
export default userSlice.reducer;
