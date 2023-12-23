import { createSlice } from '@reduxjs/toolkit'


const dataSlice = createSlice({
    name: "data",
    initialState: {
        filteredData: null,
        userData: null,
        priorityData: {
            0: "No priority",
            1: "Low",
            2: "Medium",
            3: "High",
            4: "Urgent"
        }
    },
    reducers: {
        updateFilteredData: (state, action) => {
            state.filteredData=action.payload;
        },
        updateUserData: (state, action) => {
            state.userData=action.payload;
        },
    }
});

export const { updateFilteredData, updateUserData } = dataSlice.actions;
export default dataSlice.reducer;
