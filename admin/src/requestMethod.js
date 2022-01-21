import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

let TOKEN=null;

export const persistRoot=JSON.parse(localStorage.getItem("persist:root"));

if(persistRoot){
  TOKEN =JSON.parse(persistRoot.user).currentUser?.accessToken;
}
 

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});