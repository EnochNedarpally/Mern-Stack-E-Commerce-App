import { Link } from "react-router-dom"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container=styled.div`
    margin:0.8rem;
    flex:1;
    height:70vh;
    position:relative;
    ${mobile({margin:"2px"})};
    
`
const CategoryImage=styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    ${mobile({height:"40vh"})}; 
`
const CategoryInfo=styled.div`
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    display: flex;
    flex-direction:column;  
    justify-content:center;
    align-items:center;

`
const CategoryTitle=styled.h3`
    color:white;
    font-size:2rem;
`

const Button =styled.button`
    border:2px solid black;
    background:white;
    color:black;
    padding:0.5rem 0.9rem;
    border-radius:7px;
    font-size:1.2rem;
    font-weight:500;
    cursor: pointer;
    transition:all 0.5s ease;
    &:hover{
        background:black;
        border:2px solid white;
        color:white;
        transform:scale(1.1);
    }
`
const CategoryItem = ({item}) => {
    return (
        <Container>
            <Link to ={ `/products/${item.cat}`} >
            <CategoryImage src={item.img} alt='Categories'/>
            <CategoryInfo>
                <CategoryTitle>
                    {item.title}
                </CategoryTitle>
                <Button>Shop Now!</Button>
            </CategoryInfo>
            </Link>
        </Container>
    )
}

export default CategoryItem
