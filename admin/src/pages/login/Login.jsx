import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/apiCalls';
import  './Login.css';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {error} = useSelector(state=>state.user)    
    const navigate=useNavigate();   
    const dispatch=useDispatch();
    const handleLogin=(e)=>{
        e.preventDefault();
        // console.log(username,password );
        login(dispatch,{username,password});

        !error && navigate("/")
    }
    return (
        <div className='loginContainer'>
            <div className="loginWrapper">
            <h2>Login</h2>
            <div className="loginForm">
                <input type="text" placeholder='username' required onChange={(e)=>setUsername(e.target.value)} />
                <input type="password" placeholder='password' required onChange={(e)=>setPassword(e.target.value)}  />
                {error && <span className="errorMessage">Invalid Credentials</span> }
                <button type='submit' onClick={handleLogin}>Log In</button>
            </div>
            </div>
        </div>
    );
};

export default Login;
