import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TopNav from '../components/Navigation/TopNav';

function Signup (){
    return(
        <SignupStyled>
            <TopNav />
            <div className='signup-container'>
                <div className='signup-form'>
                    <div className='signup-heading'>
                    <h1>Create Your Account</h1>
                        <p>100% Free. No Credit Cards Needed.</p>
                    </div>
                    <div className='name-input'>
                    <div className='signup-input'>
                        <h4>First Name</h4>
                        <input 
                            className={'input-highlight'}
                            type="firstName" 
                            placeholder="First Name" 
                        />
                    </div>
                    <div className='signup-input'>
                        <h4>Last Name</h4>
                        <input 
                            className={'input-highlight'}
                            type="lastName" 
                            placeholder="Last Name" 
                        />
                    </div>
                </div>
                <div className='signup-input'>
                    <h4>Email Address</h4>
                    <input 
                        className={'input-highlight'}    
                        type="email" 
                        placeholder="Email" 
                    />
                </div>
                <div className='signup-input'>
                    <h4>Password</h4>
                    <input
                        className={'input-highlight'} 
                        type="password" 
                        placeholder="Password"
                    />
                </div>
                <p className='t-n-p'>By submitting, you agree to our 
                <Link href="/"> terms and conditions</Link> and
                <Link href="/"> private policy</Link>.</p>
                <button className="log-button">Sign Up</button>
                <div className='route-login'>
                    <p>Already have an account? <Link className='login-link' href="/login">Login</Link></p>
                </div>
            </div>
                </div>
               
        </SignupStyled>
    )
}

const SignupStyled = styled.div`
    width: 100%;    
    background-color: #f9fafb;
    .signup-heading{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
    }
    .signup-container{
        padding-top: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }
    .signup-form{
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
    .signup-input{
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
    .signup-input input.input-highlight {
        border: 1px solid #D0D0D0;
    }

    .signup-input input.input-highlight:focus {
        border-color:  #3FC060;
        box-shadow: 0 0 1px 1px #ABE4BA;
        outline: none;
    }
    .t-n-p{
        font-size: 11px;
    }
    a{
        text-decoration: none;
    }
    .log-button{
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
    p, .route-login{
        font-family: 'Inter', sans-serif;
;       font-size: 14px;
    }
`;

export default Signup;