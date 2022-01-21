import { Add, Remove } from "@mui/icons-material"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import Announcements from "../components/Announcements"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { publicRequest } from "../requestMethod"
import { mobile } from "../responsive";
import {useDispatch} from "react-redux"
import { addCart } from "../redux/cartRedux"

const Container = styled.div`
`
const Wrapper = styled.div`
    height:100%;
    padding:1rem;
    display: flex;
    ${mobile({flexDirection:"column"})};
`

const ProductImageContainer = styled.div`
    flex:1;
`
const ProductImage = styled.img`
    width:100%;
    height:90vh;
    border-radius:0.4rem;
    object-fit:cover;
    ${mobile({height:"45vh"})};
`
const ProductInfoContainer = styled.div`
    flex:1;
    padding:0 2rem;
    ${mobile({padding:"0 10px"})};
    display: flex;
    flex-direction:column;
    justify-content:center;

`
const Title = styled.h2`
    font-size:2rem;
    font-weight:400;    
`
const Desc = styled.p`
    font-size:1.2rem;
    font-weight:300;
    margin:1.2rem 0;
`
const FilterType = styled.div`
    width:50%;
    display: flex;  
    justify-content:space-between;
    ${mobile({width:"100%"})};
`
const Filter = styled.div`
       margin:1rem 0;
       display: flex;
       align-items:center;
`
const FilterText = styled.p`
       font-weight:400;
       margin-right:0.7rem;
`
const FilterColorOption=styled.div`
    width:2rem;
    margin-right:0.6rem;
    height:2rem;
    border-radius:50%;
    background-color:${props=>props.color};
    cursor: pointer;
`
const SelectSize=styled.select`
    padding:0.3rem 0.5rem;
    border:2px solid lightgray;
    border-radius:5px;
`
const SizeOption=styled.option`
`
const AddProduct=styled.div`
    width:50%;
    display: flex;
    align-items:center;
    justify-content:space-between;
    ${mobile({width:"100%"})};
`
const Amount=styled.div`
    display: flex;
    align-items: center;
`
const Quantity=styled.span`
    border:2px solid gray;
    border-radius:5px;
    padding:0.4rem;
    width:2rem;
    font-weight:500;
    ${mobile({margin:"15px"})};
    text-align:center;
`
const AddCart=styled.button`
    border:2px solid gray;
    border-radius:5px;
    font-weight:500;
    background:transparent;
    padding:0.4rem;
    cursor: pointer;
    ${mobile({background:"teal",color:"white"})};
`
const ProductPage = () => {
    const dispatch=useDispatch();
    const location=useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState();
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState(" ");
    const [size, setSize] = useState(" ");
   
    useEffect(() => {
        const getProduct = async () => {
          try {
            const res = await publicRequest.get("/products/find/" + id);
            setProduct(res.data);
          } catch {}
        };
        getProduct();
      }, [id]);
    const handleAmount=(type)=>{
          if(type==="inc"){
            setQuantity(quantity+1);
        }
        else{
            quantity>1 && setQuantity(quantity-1);
        }
      }
    const handleAddCart = ()=>{
        dispatch(
            addCart({...product,quantity,color,size})
        )
    }
    return (
        <Container>
            <Navbar />
            <Announcements />
            <Wrapper>
                <ProductImageContainer>
                    <ProductImage src={product && product.img} alt='Product' />
                </ProductImageContainer>
                <ProductInfoContainer>
                    <Title>{ product?.title}</Title>
                    <Desc>{product?.desc}</Desc>
                    <Title>Rs { product?.price}</Title>
                    <FilterType>
                        <Filter>
                            <FilterText>Color:</FilterText>
                            {product?.color.map(c=>(
                                <FilterColorOption key={c} color={c} onClick={()=>setColor(c)}/>
                            ))}
                            
                        </Filter>
                        <Filter>
                            <FilterText>Size</FilterText>
                            <SelectSize onChange={(e)=>setSize(e.target.value)}>
                            {product?.size.map(s=>(
                                    <SizeOption key={s}>{s}</SizeOption>
                            ))}
                            </SelectSize>
                        </Filter>
                    </FilterType>
                    <AddProduct>
                        <Amount>
                            <Remove style={{cursor:"pointer"}}  onClick={()=>handleAmount("dec")}/>
                               <Quantity>{quantity}</Quantity> 
                            <Add style={{cursor:"pointer"}} onClick={()=>handleAmount("inc")}/>
                        </Amount>
                        <AddCart onClick={handleAddCart}>Add To Cart</AddCart>
                    </AddProduct>
                </ProductInfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductPage
