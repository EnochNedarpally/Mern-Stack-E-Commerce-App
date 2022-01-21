import { publicRequest, userRequest } from "../requestMethod";
import { addProductFailure, addProductStart, addProductSuccess, deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess } from "./productRedux";
import { getUserFailure, getUserStart, getUserSuccess } from "./userListRedux";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"


export const login = async(dispatch,user)=>{
    dispatch(loginStart());
    try {
        const res= await publicRequest.post("/auth/login",user);
        dispatch(loginSuccess(res.data));

    } catch (error) {
        dispatch(loginFailure());
    }
}
export const getProduct = async(dispatch)=>{
    dispatch(getProductStart());
    try {
        const res= await publicRequest.get("/products");
        dispatch(getProductSuccess(res.data));

    } catch (error) {
        dispatch(getProductFailure());
    }
}
export const deleteProduct = async(dispatch,id)=>{
    dispatch(deleteProductStart());
    try {
        // const res= await userRequest.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(id));

    } catch (error) {
        dispatch(deleteProductFailure());
    }
}
export const updateProduct = async(dispatch,id,product)=>{
    dispatch(updateProductStart());
    try {
        const res= await userRequest.put(`/products/`,product);
        dispatch(updateProductSuccess({id,product}));

    } catch (error) {
        dispatch(updateProductFailure());
    }
}
export const addProduct = async(dispatch,product)=>{
    dispatch(addProductStart());
    try {
        const res= await userRequest.post(`/products/`,product);
        dispatch(addProductSuccess(res.data));

    } catch (error) {
        dispatch(addProductFailure());
    }
}

export const getUsers = async(dispatch)=>{
    dispatch(getUserStart());
    try {
        const res= await userRequest.get("/users");
        dispatch(getUserSuccess(res.data));

    } catch (error) {
        dispatch(getUserFailure());
    }
}