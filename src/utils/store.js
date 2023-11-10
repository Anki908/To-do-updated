import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';

const appStore = configureStore({
    reducer: {
        Task: userReducer
    },
})

export default appStore;