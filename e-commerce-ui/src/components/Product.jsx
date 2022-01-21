import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Info=styled.div`
    opacity:0;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    display: flex;
    background-color: rgba(0, 0, 0, 0.2);
    justify-content:center;
    align-items:center;
    z-index:3;
    transition:all 0.5s ease;
    cursor:pointer;
`
const Container=styled.div`
    flex:1;
    min-width:280px;
    height:50vh;
    margin-bottom:1rem;
    margin-right:1rem;
    border:2px solid transparent;
    border-radius:5px;
    background-color: #f5fbfd;
    position:relative;
    &:hover ${Info}{
        opacity:1;
    }
`

const Image=styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    z-index:2;
`

const Icon=styled.div`
     margin-right:1rem;
     width:3rem;
     height:3rem;
     background-color:white;
     border-radius:50%;
     display: flex;
     justify-content: center;
     align-items: center;
     cursor:pointer;
     transition:all 0.5s ease;
     
     &:hover{
         background-color:#f5fbfd;
         transform:scale(1.1)
     }
`
const Product = ({item}) => {
    
    return (
        <Container>
            <Image src={item.img} alt="Products"/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined className="link" />
                </Icon>
                <Icon>
                    <Link className="link" to ={`/product/${item._id}`}>
                        <SearchOutlined/>
                    </Link>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined className="link" />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
