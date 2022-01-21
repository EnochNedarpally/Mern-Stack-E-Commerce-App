import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { login } from "../redux/apiCalls"
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
    width:30%;
    ${mobile({width:"75%"})};
`
const Title = styled.h1`
    font-size:1.4rem;
    font-weight:400;
    margin-bottom:0.8rem;
`
const Form = styled.div`
    display: flex;
    flex-direction:column;
    /* align-items: center; */
`
const Input = styled.input`
    width:80%;
    padding:0.4rem 0.7rem;
    border-radius:5px;
    margin-right:0.6rem;
    margin-bottom:0.8rem;

`
const Button = styled.div`
    width:20%;
    background:teal;
    color:white;
    cursor:pointer;
    border:2px solid black;
    border-radius:6px;
    padding:0.4rem 0.7rem;
    font-weight:500;
    transition:all 0.4s ease;
    margin-bottom:0.8rem;
    ${mobile({width:"25%"})};
    /* &:hover{
        background:white;
        color:teal;
        transform:scale(1.1);
    } */
    &:disabled{
        background:gray;
        cursor: not-allowed;
    }
`
const ErrorMessage=styled.span`
    color:red;
    font-size:0.8rem;
    font-weight:bold;
`
const Link =styled.a`
    font-size:0.7rem;
    text-decoration:underline;
    margin-bottom:0.5rem;
    cursor:pointer;
`
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch=useDispatch();
    const {error,isFetching}=useSelector(state=>state.user)
    const handleClick=(e)=>{
        e.preventDefault();
        login(dispatch,{username,password});
    }
    return (
        <Container>
            <Wrapper>
                <Title>Login</Title>
                <Form>
                    <Input type='text' placeholder='username' onChange={(e)=>setUsername(e.target.value) } required minLength={4}/>
                    <Input type='password' placeholder='Password'  onChange={(e)=>setPassword(e.target.value) }  required minLength={6}/>
                    <Button type="submit" onClick={handleClick} disabled={isFetching}>Login</Button>
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    <Link>Forget Password?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
