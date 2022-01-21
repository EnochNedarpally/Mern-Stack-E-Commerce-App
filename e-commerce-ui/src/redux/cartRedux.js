import {createSlice} from "@reduxjs/toolkit";
const cartSlice =createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0
    },
    reducers:{
        addCart:(state,action)=>{
            state.quantity += 1;
            state.products.push(action.payload);
            state.total+=action.payload.price * action.payload.quantity;
        }
    },
});

export  const {addCart} = cartSlice.actions;
export default cartSlice.reducer;
