import { Send } from "@mui/icons-material"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container=styled.div`
    width:100%;
    height:40vh;
    background-color:#d9d3c799;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    ${mobile({textAlign:"center"})};
`
const Title=styled.h2`
    font-size:3.5rem;
    margin-bottom:1rem;
    letter-spacing:1px;
`
const Desc=styled.p`
    font-size:1.3rem;
    margin-bottom:1rem;
    display: flex;
`
const InputContainer=styled.div`
    width:50%;
    border:1px solid lightgray;
    display:flex;
    border-radius:6px;
    ${mobile({width:"80%"})};
`
const Input=styled.input`
    flex:8;
    padding:0 0.4rem;
    font-weight:500;
`   
const Button=styled.button`
    flex:1;
    cursor:pointer;
    background-color:teal;
    color:white;
`
const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get timely updates from your favorite products.</Desc>
            <InputContainer>
                <Input type='email' placeholder="Enter email" />
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
