import { createSlice } from "@reduxjs/toolkit";

export const recordSlice = createSlice ({
    name: "Record",
    initialState: {
        value: "",
    },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
    },
});

export default recordSlice.reducer;