import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function TopNav (){
    return (
        <TopNavStyled>
            <nav class="navbar">
                <div class="logo">
                    <h1>GigLog</h1>
                    <ul class="navbar-items">
                        <li><a href="/about">About</a></li>
                        <li><a href="/FAQ">FAQ</a></li>
                        <li><a href="/contact">Contribution</a></li>
                    </ul>
                </div>
                <div class="auth-options">
                    <ul class="auth-items">
                        <Link className='login-link' to={"/login"}>Login</Link>
                        <Link className='signup-link' to={"/signup"}>Sign Up</Link>
                    </ul>
                </div>
            </nav>
        </TopNavStyled>
    )
}

const TopNavStyled = styled.div`
    .navbar{
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        align-items: center;
        min-height: 8vh;
        padding: 1rem 5rem 0;
    }
    .navbar-items, .auth-items{
        display: flex;
        flex-flow: row;
        justify-content: space-evenly;
        align-items: center;
        list-style: none;
        width: 60%;
        a{
            color: inherit;
            text-decoration: none;
        }
    }
    .logo{
        display: flex;
        flex-direction: row;
        width: 50%;
        text-decoration: none;
    }
    .auth-options{
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 20%;
        .auth-items{
            gap: 1rem;
        }
        .signup-link{
            border: 1px solid black;
            padding: 0.5rem 1rem;
            border-radius: 10px;
        }
    }
`;

export default TopNav;