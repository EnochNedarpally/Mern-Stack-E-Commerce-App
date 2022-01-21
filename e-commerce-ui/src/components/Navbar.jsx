import styled from "styled-components"
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



const Container = styled.div`
  display:flex;
  padding:0.6rem 1rem;
  ${mobile({ padding: "3px 0" })};
`
const Left = styled.div`
 flex:1;
 display:flex;
 align-items:center;
 
`

const Language = styled.p`
    ${mobile({ display: "none" })};
`
const SearchContainer = styled.div`
    display: flex;
    align-items:center;
    border:1px solid gray;
    border-radius:5px;
    margin-left:10px;
    ${mobile({ marginLeft: "3px", width: "100px" })};
`
const Input = styled.input`
    border:none;
    outline:none;
    ${mobile({ width: "70%" })};
`

const Center = styled.div`
   flex:1;
   display: flex;
   justify-content:center;
   align-items:center;
   ${mobile({ flex: "2" })};
`
const Logo = styled.h2`
`
const Right = styled.div`
   flex:1;
   display: flex;
   justify-content:flex-end;
   align-items:center;
   ${mobile({ flex: 3, justifyContent: "center" })};
`
const NavItem = styled.div`
    cursor:pointer;
    margin:0.7rem;
    ${mobile({ margin: "6px" })};
`


const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity);
    const user=useSelector(state=>state.user);
    return (
        <>
            <Container>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>eComm.</Logo>
                </Center>
                <Right>
                    {!user.currentUser && 
                    <Link className="link navLink" to="/register">Register</Link>
                    }
                    {!user.currentUser &&
                    <Link className="link navLink" to="/login">Sign In</Link>}

                    <NavItem>
                        <Badge badgeContent={quantity} color="primary">
                            <Link className="link" to="/cart">
                                <ShoppingCartOutlined />
                            </Link>
                        </Badge>
                    </NavItem>
                </Right>
            </Container>
        </>

    )
}

export default Navbar
