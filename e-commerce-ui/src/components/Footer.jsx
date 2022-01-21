import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@mui/icons-material"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    padding:0.7rem;
    width:100%;
    display: flex;
    ${mobile({padding:"0 5px",
    flexDirection:"column",
    textAlign:"center",
    justifyContent:"center",
    alignItems:"center"})};
`
const LeftFooter = styled.div`
    flex:1;
    ${mobile({marginBottom:"8px"})};
`

const Logo = styled.h2`
   
`
const Desc = styled.p`
    margin:0.7rem 0;  
    font-size:0.9rem; 
    font-weight:400;
`
const SocialIcons = styled.div`
    display: flex;
    ${mobile({justifyContent:"center"})};
`
const Icon = styled.div`
    width:2.5rem;
    height:2.5rem;
    border-radius:50%;
    background:#${props => props.bg};
    margin-right:0.8rem;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
`
const CenterFooter = styled.div`
    flex:1;
    margin:0 1rem;
`

const Title=styled.h4`
    margin-bottom:0.8rem;
    ${mobile({display:"none"})};
`
const Links=styled.ul`
    list-style:none;
    display: flex;
    flex-wrap:wrap;
    margin-top: 0.9rem;
    padding: 0;
    ${mobile({display:"none"})};
`
const LinkItem=styled.li`
    width:50%;
    cursor:pointer;
    font-size:0.9rem;
    margin-bottom:0.9rem;
`
const RightFooter = styled.div`
    flex:1;
`
const ContactItem = styled.div`
    margin-bottom:0.8rem;
    display: flex;
    align-items:center;
`
const PaymentImage=styled.img`
`
const Footer = () => {
    return (
        <Container>
            <LeftFooter>
                <Logo>
                    eComm.
                </Logo>
                <Desc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus dolore dolorem optio eum, omnis eos quaerat, praesentium ipsum veritatis cum nulla numquam commodi dolorum dignissimos corporis est ipsa! Facere sequi doloremque tempora optio magni maxime.
                </Desc>
                <SocialIcons>
                    <Icon bg="3B5999">
                        <Facebook />
                    </Icon>
                    <Icon bg="E4405F">
                        <Instagram />
                    </Icon>
                    <Icon bg="55ACEE">
                        <Twitter />
                    </Icon>
                </SocialIcons>
            </LeftFooter>
            <CenterFooter>
                <Title>Useful Links</Title>
                <Links>
                    <LinkItem>Home</LinkItem>
                    <LinkItem>Cart</LinkItem>
                    <LinkItem>Man Fashion</LinkItem>
                    <LinkItem>Woman Fashion</LinkItem>
                    <LinkItem>Accessories</LinkItem>
                    <LinkItem>My Account</LinkItem>
                    <LinkItem>Order Tracking</LinkItem>
                    <LinkItem>Wishlist</LinkItem>
                    <LinkItem>Wishlist</LinkItem>
                    <LinkItem>Terms</LinkItem>
                </Links>
            </CenterFooter>
            <RightFooter>
                <Title>Contact</Title>
                <ContactItem>
                    <Room/>
                    1234 New Avenue Pune 411040
                </ContactItem>
                <ContactItem>
                    <Phone/>
                    +91 9876543210
                </ContactItem>
                <ContactItem>
                    <MailOutline/>
                    contact@ecom.com
                </ContactItem>
                <PaymentImage src="https://i.ibb.co/Qfvn4z6/payment.png"  alt="payments"/>
            </RightFooter>
        </Container>
    )
}

export default Footer
