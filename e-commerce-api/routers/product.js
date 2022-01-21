const cryptoJs = require("crypto-js");
const Product = require("../models/Product");

const { verifyAdmin } = require("./verifyToken");

const router=require("express").Router();

//Create A New Product
router.post("/",verifyAdmin,async(req,res)=>{
    const product= await new Product(req.body)
    try {
        const savedProduct=await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
})

//Update Product 
router.put("/:id",verifyAdmin, async(req,res)=>{
    try {
        const updatedProduct=await Product.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json(error);
    }
    
})

//Delete Product
router.delete("/:id",verifyAdmin,async(req,res)=>{
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted");
    } catch (error) {
        res.status(500).json(error);
    }
})

//Get a Product
router.get("/find/:id",async(req,res)=>{
    try {
        const product=await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
})

//Get all Products
router.get("/",async(req,res)=>{
    const queryNew=req.query.new;
    const queryCategories=req.query.category;
    try {
        let product;
        if(queryNew){
            product=await Product.find().sort({createdAt:-1}).limit(2)
        }
        else if(queryCategories){
            product=await Product.find({
                categories:{
                    $in:[queryCategories],
                },
            });
        }
        else {
            product=await Product.find()
        }
        
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
        // console.log(error);
    }
})



module.exports=router;