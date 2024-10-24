import { createSlice } from "@reduxjs/toolkit";

const addSlice=createSlice({
    name:"addbook",
    initialState:{
        bookdetails:{}
    },
    reducers:{
        addbook:(state,action)=>{
            state.bookdetails=action.payload
            alert("added go to view")
        },
        removebook:(state)=>{
            state.state=[]
        }
     
    }
})

export default addSlice.reducer
export const{addbook,removebook}=addSlice.actions