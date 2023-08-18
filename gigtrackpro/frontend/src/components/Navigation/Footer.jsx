import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Footer (){
    return (
        <FooterStyled>
            <div className='footer-container'>
                <h5>© 2023 All rights reserved.</h5>
                <div className='creator'>
                    <h5>Created By <a href="https://github.com/bvchnguyen">Bach Nguyen</a></h5>
                </div>
            </div>
        </FooterStyled>
    )
}

const FooterStyled = styled.div`
    width: 100%;
    height: 50px;
    font-family: 'Inter', sans-serif;
    color: grey;
    a{
        text-decoration: none;
        color: inherit
    }
    .footer-container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 2rem;
    }
    /* background-color: blue; */
`;

export default Footer;