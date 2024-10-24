import { configureStore } from "@reduxjs/toolkit";
import addSlice from "./Slice/addSlice";

const store=configureStore({
    reducer:{
        addbookReducer:addSlice
    }
})

export default store