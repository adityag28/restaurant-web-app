import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: "menu",
    initialState: [],
    reducers: {
        addMenu: (state, action) => {
            const item = state.find(i => i.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        removeMenu: (state, action) => {
            const itemIndex = state.findIndex(i => i.id === action.payload.id);
            if (itemIndex !== -1) {
                if (state[itemIndex].quantity > 1) {
                    state[itemIndex].quantity -= 1;
                } else {
                    state.splice(itemIndex, 1);
                }
            }
        },
        resetMenu: () => []
    },
});

export const { addMenu, removeMenu, resetMenu } = menuSlice.actions;
export default menuSlice.reducer;
