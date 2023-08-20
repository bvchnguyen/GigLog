import React from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import TopNav from '../components/Navigation/TopNav';

function Login (){

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [redirect, setRedirect] = React.useState(false);

    async function handleLoginSubmit(e){
        e.preventDefault();
        try{
            const { data } = await axios.post('/login', {
                email,
                password
            });
            alert('Login Successful!');
            setRedirect(true);
        } catch (error){ 
            alert('Login Failed!');
            console.log(error);
        }
    }

    if (redirect) {
        return <Navigate to="/account" />
    }

    return(
        <LoginStyled>
            <TopNav />
            <div className='login-container'>
                <form className='login-form' onSubmit={handleLoginSubmit}>
                    <div className='login-heading'>
                    <h1>Login</h1>
                        <p>Monitor and Analyze your performance!</p>
                    </div>
                <div className='login-input'>
                    <h4>Email Address</h4>
                    <input 
                        className={'input-highlight'}    
                        type="email" 
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div className='login-input'>
                    <h4>Password</h4>
                    <input
                        className={'input-highlight'} 
                        type="password" 
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type='submit' className="login-button">Login</button>
                <div className='route-signup'>
                    <p>Don't have an account? <Link href="/signup">Sign Up</Link></p>
                </div>
            </form>
                </div>
        </LoginStyled>
    )
}

const LoginStyled = styled.div`
    width: 100%;    
    background-color: #f9fafb;
    .login-heading{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
    }
    .login-container{
        padding-top: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }
    .login-form{
        background-color: white;
        border: 1px solid #F3F3F3;
        border-radius: 10px;
        padding: 2rem;
        width: 450px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        box-shadow: rgba(81, 111, 144, 0.2) 0px 4px 20px;
    }
    .name-input{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        gap: 1rem;
        width: 100%;
    }
    input{
        height: 40px;
        font-size: 1rem;
        font-family: inherit;
        font-weight: none;
        outline: none;
        border: 1px solid #D0D0D0;
        border-radius: 6px;
        padding: .5rem 1rem;
        background: transparent;
        resize: none;
        &::placeholder{
            font-size: 15px;
            color: #B2B2B2;
        }
    }
    .login-input{
        width: 100%;
        input{
            width: 100%;
        }
        h4{
            font-family: 'Inter', sans-serif;
            font-weight: 500;
            font-size: 14px;
            margin-bottom: 5px;
        }
    }
    .login-input input.input-highlight {
        border: 1px solid #D0D0D0;
    }

    .login-input input.input-highlight:focus {
        border-color:  #3FC060;
        box-shadow: 0 0 1px 1px #ABE4BA;
        outline: none;
    }
    a{
        text-decoration: none;
    }
    .login-button{
        width: 100%;
        margin-top: 10px;
        background-color: #3FC060;
        color: white;
        cursor: pointer;
        font-size: 17px;
        place-items: center;
        text-align: center;
        border: none;
        height: 50px;
        place-items: center;
        border-radius: 7px;
        text-decoration: none;
        letter-spacing: 2px;
    }
    p, .route-signup{
        font-family: 'Inter', sans-serif;
;       font-size: 14px;
    }
`;

export default Login;