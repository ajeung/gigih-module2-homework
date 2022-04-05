import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice ({
    name: "Record",
    reducers: {
        formChange: (state, action) => {
            const { name, value } = action.payload.target;
            console.log(value);
            state.form = {
                ... state.form,
                [name]: value,
            };
        },
        handleSubmit: (state, action) => {
        },
    },
});

export const { formChange } = searchSlice.actions;
export default searchSlice.reducer;