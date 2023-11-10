import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "Task",
    initialState: {
        data: [],
    },
    reducers: {
        enterdata: (state , action) => {
            state.data.push(action.payload);
        },
        deleteData: (state , action) => {
            const res = state.data.filter((ele) => {
                return ele !== action.payload
            })
            state.data = res;
        },
        updateData: (state , action) => {
           
        }
    }
})

export const { enterdata , deleteData , updateData} = userSlice.actions;
export default userSlice.reducer; 