import { useEffect, useState } from "react"
import styled from "styled-components";
import Product from "./Product"
import { publicRequest } from "../requestMethod";

const Container=styled.div`
display: flex;
flex-wrap:wrap;
justify-content:space-evenly;
padding:1.2rem;

`
const Products = ({category,filter,sort}) => {
    const [product, setProduct] = useState([]);
    const [filteredProduct, setFilteredProduct] = useState([]);
    useEffect(()=>{
        const getProducts=async()=>{
            try {
                const res= await publicRequest.get(category ? `/products?category=${category}` : `/products`);
                setProduct(res.data);
            } catch (error) {
                console.log(error)
            }
           
        }
        getProducts();
    },[category]);
    useEffect(()=>{
        category && setFilteredProduct(
            product.filter(item=>
                Object.entries(filter).every(([key,value])=>
                item[key].includes(value)
                )
            )
        )
    },[category,filter,product]);
    useEffect(()=>{
        if(sort==="newest"){
            setFilteredProduct(prev=>
                [...prev].sort((a,b)=>a.createdAt - b.createdAt))
        }
        else if(sort==="asc"){
            setFilteredProduct(prev=>
                [...prev].sort((a,b)=>a.price - b.price))
        }
        else{
            setFilteredProduct(prev=>
                [...prev].sort((a,b)=>b.price - a.price))
        }
    },[sort]);
    return (
        <Container>
            {category ? filteredProduct.map(item=>{
                return <Product key={item._id} item={item}/>
            }) :
            product.map(item=>{
                return <Product key={item._id} item={item}/>
            })
            }
            
        </Container>
    )
}

export default Products
