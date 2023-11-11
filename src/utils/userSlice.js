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

            console.log(state.data[action.payload][state.data.length-1]);

            var ans = state.data[action.payload];
            var b = -1;
            ans.split("").map((e) => {
                if(e === '✅'){
                    b = 1;
                }
            })
            if(b !== 1){
                state.data[action.payload] = state.data[action.payload] + "  ✅"
            }
            else{
                state.data[action.payload] = ans.substring(0 , ans.length-1);
            }
            // if(state.data[state.data.length-1] !== '  ✅'){
            //     state.data[action.payload] = state.data[action.payload] + "  ✅"
            // } 

        }
    }
})

export const { enterdata , deleteData , updateData} = userSlice.actions;
export default userSlice.reducer; 