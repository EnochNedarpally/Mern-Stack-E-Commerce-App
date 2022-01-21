const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
const userRoute=require("./routers/user");
const authRoute=require("./routers/auth");
const productRoute=require("./routers/product");
const cartRoute=require("./routers/cart");
const orderRoute=require("./routers/order");
const stripeRoute=require("./routers/stripe");
const cors=require("cors");


mongoose.connect(process.env.MONGO_URL)
.then(console.log("Database Connected Successfully!"))
.catch((error)=>console.log(error))
app.use(express.json());
app.use(cors());

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/products",productRoute);
app.use("/api/cart",cartRoute);
app.use("/api/orders",orderRoute);
app.use("/api/checkout",stripeRoute);

app.listen(5000,()=>{
    console.log("Backend Server Is Running!")
})