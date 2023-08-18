import React, { useState } from 'react';
import styled from 'styled-components';
import TopNav from '../components/Navigation/TopNav';
import Footer from '../components/Navigation/Footer';
import Signup from './Signup';

function Landing (){
    return(
        <LandingStyled>
            <TopNav />
            <div class="landing">
                <h1 id="intro">Elevate Your<br /> Gig Income Tracking</h1>
                {/* <p>A Platform to effortlessly monitor and optimize your gig earnings and expenses.</p> */}
                <a className="IntroButton" target="#">Get Started</a>
            </div>  
            <Footer />
        </LandingStyled>
    )
}

const LandingStyled = styled.div`
    width: 100%;
    overflow: auto;
    /* height: 100vh; */
    .landing{
        h1{
            font-family: 'Archivo Black', sans-serif;
            font-size: 3.75rem;
            font-style: bold;
            font-weight: 400;
            margin-bottom: 1rem;
        }
        p{
            font-size: 25px;
            font-style: bold;
            font-weight: 400;
        }
        display: flex;
        flex-flow: column;
        text-align: center;
        align-items: center;
        justify-content: flex-start;
        min-height: 90vh;
        background-color: white;
        padding: 5rem;
        padding-bottom: 0; 
    }
    .IntroButton{
        color: #565656;
        font-size: 15px;
        display: grid;
        place-items: center;
        text-align: center;
        border: 1px solid #565656;
        height: 50px;
        width: 200px;
        place-items: center;
        border-radius: 10px;
        text-decoration: none;
        letter-spacing: 2px;
        box-shadow: inset 0 0 0 0 #3FC060;
        transition: 0.5s ease-out;
    }
    .IntroButton:hover{
        color: #EFEFEF;
        border-color: #3FC060;
        box-shadow: inset 300px 0 0 0 #3FC060;
        font-style: italic;
        cursor: pointer;
    }
`;

export default Landing;