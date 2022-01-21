import {createSlice} from "@reduxjs/toolkit";
const userListSlice =createSlice({
    name:"userList",
    initialState:{
        users:[],
        isFetching:false,
        error:false,
    },
    reducers:{
        getUserStart:(state)=>{
            state.isFetching=true;
        },
        getUserSuccess:(state,action)=>{
            state.isFetching=false;
            state.users=action.payload;
        },
        getUserFailure:(state)=>{
            state.isFetching=false;
            state.error=true;
        },
       
    },
});

export  const {getUserStart,getUserSuccess,getUserFailure} = userListSlice.actions;
export default userListSlice.reducer;
