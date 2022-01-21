import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    width:100vw;
    height:100vh;
    background:linear-gradient(rgba(221, 237, 225,0.6),rgba(237, 225, 234,0.6));
    display: flex;
    justify-content:center;
    align-items: center;
`
const Wrapper = styled.div`
    padding:1rem;
    border-radius:5px;
    background:white;
    width:40%;
    ${mobile({width:"80%"})};
`
const Title = styled.h1`
    font-size:1.4rem;
    font-weight:400;
    margin-bottom:0.8rem;
`
const Form = styled.div`
    display: flex;
    flex-wrap:wrap;
    align-items: center;
`
const Input = styled.input`
    width:45%;
    padding:0.4rem 0.7rem;
    border-radius:5px;
    margin-right:0.6rem;
    margin-bottom:0.8rem;

`
const Agreements = styled.div`
    font-size:0.8rem;
    margin-bottom:0.8rem;
`
const Button = styled.div`
    background:teal;
    color:white;
    cursor:pointer;
    border:2px solid black;
    border-radius:6px;
    padding:0.4rem 0.7rem;
    font-weight:500;
    transition:all 0.4s ease;
    &:hover{
        background:white;
        color:teal;
        transform:scale(1.1);
    }
`
const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Create An Account</Title>
                <Form>
                    <Input type='text' placeholder='First Name' />
                    <Input type='text' placeholder='Last Name' />
                    <Input type='text' placeholder='Username' />
                    <Input type='email' placeholder='Email Id' />
                    <Input type='password' placeholder='Password' />
                    <Input type='password' placeholder='Confirm Password' />
                <Agreements>
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                </Agreements>
                <Button>Create</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
