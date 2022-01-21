import { Add, Remove } from "@mui/icons-material"
import styled from "styled-components"
import Announcements from "../components/Announcements"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { mobile } from "../responsive"
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethod";
import { useNavigate } from "react-router";



const KEY = process.env.STRIPE_KEY;

const Wrapper = styled.div`
    padding:1rem;
`
const Title = styled.h1`
    font-size:1.5rem;
    font-weight:500;
    text-align:center;
    margin-bottom:0.8rem;
`
const ShoppingButtons = styled.div`
    display: flex;
    justify-content:space-between;
    padding:1rem;
`
const Button = styled.button`
    padding:0.4rem 0.6rem;
    border-radius:5px;
    cursor:pointer;
    border:${props => props.type === "filled" && "none"};
    background:${props => props.type === "filled" ? "black" : "transparent"};
    color:${props => props.type === "filled" ? "white" : "black"};
`
const ShoppingLinks = styled.div`

`
const Link = styled.a`
    font-size:0.9rem;
    margin-right:0.8rem;
    cursor:pointer;
    text-decoration:underline;
    ${mobile({ display: "none" })};
`
const CartInfo = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })};
`
const ProductList = styled.div`
    flex:3;
    display: flex;
    flex-direction:column;
`
const ProductDetails = styled.div`
    /* flex:3; */
    display: flex;
    ${mobile({ marginBottom: "12px" })};
   
`
const ProductImage = styled.img`
    flex:1;
    width:20%;
`
const ProductInfo = styled.div`
    flex:2;
    margin:0 1rem;
    display: flex;
    flex-direction:column;
    justify-content:space-around;
    ${mobile({ flex: "3" })};
`
const ProductName = styled.p`
    ${mobile({ fontSize: "12px" })};
`
const ProductId = styled.p`
     ${mobile({ fontSize: "12px", margin: "10px 0" })};
`
const ProductColorDetails = styled.div`
    display: flex;
    align-items: center;
`
const ProductColor = styled.div`
    margin-left:0.6rem;
    width:2rem;
    height:2rem;
    border-radius:50%;
    background:${props => props.color};
    ${mobile({ marginBottom: "12px" })};
`
const ProductSize = styled.div`
     ${mobile({ fontSize: "12px" })};
`
const ProductAmount = styled.div`
    flex:1;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`
const Amount = styled.div`
    display: flex;
    align-items:center;
    margin-bottom:1rem;
`
const Value = styled.span`
    border:2px solid gray;
    padding:5px;
    margin:0 10px;
`
const Price = styled.h2`
    font-weight:400;
`
const Hr = styled.hr`
    background:#eee;
    border:none;
    height:1px;
`
const Summary = styled.div`
    flex:1;
    border:1px solid lightgray;
    border-radius:5px;
    padding:1rem;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    height:min-content;
`
const SummaryItem = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
`
const SummaryItemText = styled.p`
    font-weight:${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
    ${mobile({ fontSize: "14px" })};
`;

const SummaryItemPrice = styled.span`
     ${mobile({ fontSize: "14px" })};
`;


const ShoppingCart = () => {
    const cart = useSelector(state => state.cart);
    const [stripeToken, setStripeToken] = useState(null);
      const onToken = (token) => {
        setStripeToken(token);
};
const navigate = useNavigate();


useEffect(()=>{

    const makeRequest= async ()=>{
        try {
            const res= await userRequest.post("/checkout/payment",{
                tokenId: stripeToken.id,
                amount: cart.total,
              })
              navigate("/success",{data:res.data});
              console.log(navigate);
        } 
        
        catch (error) {
            console.log(error)
        }
        
    }
    stripeToken?.id && makeRequest();

},[cart.total,stripeToken?.id,navigate])


    return (
        <>
            <Navbar />
            <Announcements />
            <Wrapper>
                <Title>Your Cart</Title>
                <ShoppingButtons>
                    <Button>Continue Shopping</Button>
                    <ShoppingLinks>
                        <Link>Shopping Cart(2)</Link>
                        <Link>Your Wishlist (1)</Link>
                    </ShoppingLinks>
                    <Button type="filled">Checkout Now</Button>
                </ShoppingButtons>
                <CartInfo>
                    <ProductList>
                        {cart.products.map(
                            product => (
                                <ProductDetails key={product._id}>
                                    <ProductImage src={product.img} alt={product.title} />
                                    <ProductInfo>
                                        <ProductName>
                                            <b>Product:</b> {product.title}
                                        </ProductName>
                                        <ProductId>
                                            <b>ID:</b> {product._id}
                                        </ProductId>
                                        <ProductColorDetails>
                                            <b>Color</b> <ProductColor color={product.color} />
                                        </ProductColorDetails>
                                        <ProductSize>
                                            <b>Size:</b> {product.size}
                                        </ProductSize>
                                    </ProductInfo>
                                    <ProductAmount>
                                        <Amount>
                                            <Remove />
                                            <Value>{product.quantity}</Value>
                                            <Add />
                                        </Amount>
                                        <Price>
                                            Rs {product.price * product.quantity}
                                        </Price>
                                    </ProductAmount>
                                </ProductDetails>
                            )
                        )}

                        <Hr />
                    </ProductList>
                    <Summary>
                        <Title>Order Summary</Title>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>Rs {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>Rs 90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>Rs -90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem >
                            <SummaryItemText type="total">Total</SummaryItemText>
                            <SummaryItemPrice>Rs {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                            name="eComm."
                            image="https://avatars.githubusercontent.com/u/1486366?v=4"
                            billingAddress
                            currency="INR"
                            shippingAddress
                            description={`Your total is $${cart.total}`}
                            amount={cart.total * 100}
                            token={onToken}
                            stripeKey="pk_test_51KHSLzSFPuZ7XZqyU4QBaspKRzL0L0ecdePmo7OVXmSSfExt0LU2Pk5ive8VJBgPlllbaXsDp1pUvIvt8j1pXx9500P9ppdjr7"
                        >
                            <Button  type="filled">CHECKOUT NOW</Button>
                        </StripeCheckout>
                    </Summary>
                </CartInfo>
            </Wrapper>
            <Footer />
        </>
    )
}

export default ShoppingCart
