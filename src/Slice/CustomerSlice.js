import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

 const customerSlice = createSlice({
    name:'customer',    
    initialState,
    reducers:{
        addCustomers (state,action){
            state.push(action.payload)

        },
        deleteCustomer(state,action){
            const DeleteIndex= action.payload;
           return state.filter((val,index)=>index!==DeleteIndex)
        }
    }
 })
 export const { addCustomers,deleteCustomer } = customerSlice.actions;
 export default customerSlice.reducer