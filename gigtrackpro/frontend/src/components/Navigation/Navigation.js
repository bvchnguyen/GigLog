import React from 'react';
import styled from 'styled-components';
import  avatar from '../../img/avatar.jpg';
import { Link } from 'react-router-dom';
import { menuItems, settingItems } from '../../utils/MenuItems'
import { signout } from '../../utils/Icons' 
import EarningsModal from '../Modal/EarningsModal'
import ExpenseModal from '../Modal/ExpenseModal'

function Navigation ({active, setActive}){
    return (
        <NavStyled>
            <div className='logo-container'>
                {/* <img  src={avatar} alt ="Avatar"/> */}
                <h2 className='logo-text'>Gig | Log</h2>
            </div>
            <ul className='menu-items'>
                <h2>MAIN MENU</h2>
                {menuItems.map((item) => {
                    return <Link 
                        key = {item.id}
                        to={item.link}
                        // Set item ID upon click
                        onClick={() => setActive(item.id)}
                        // If active Matches item ID, then className is active, otherwise nothing
                        className={active === item.id ? 'active': ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                       </Link>
                })}
            </ul>
            {/* <div className='bottom-nav'>
                <h1>HELLO</h1>
            </div> */}
        </NavStyled>
    )
}

const NavStyled = styled.nav`
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: #f9fafb;
    color: #6f6f6f;
    padding: 2rem 1rem 1rem 1rem;
    width: 200px;
    height: 100%;
    gap: 2rem;

    .log-btns{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: .5rem;
        /* padding: 2rem;  */
    }
    .logo-container{
        /* position: relative; */
        /* height: 100px; */
        /* background-color: #3FC060; */
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: .5rem;
        img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            object-fit: cover;
            /* border: 2px solid white; */   
        }
        .logo-text{
            font-family: 'Inter';
            font-weight: 400;
            font-size: 20px;
            margin-bottom: .5rem;
        }
    }
    .menu-items{
        display: flex;
        flex-direction: column;
        font-style: normal;
        font-family: 'Inter';
        letter-spacing: 2px;
        h2{
            padding: 0rem 1rem;
            font-size: 12px;
            font-weight: 400;
        }
        span{
            font-size: 12px;
        }
        a{
            font-family: Arial, Helvetica, sans-serif;
            height: 5vh;
            display: grid;
            grid-template-columns: 30px auto;
            align-items: center;
            margin: .4rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            padding-left: 1rem;
            position: relative;
            border-radius: 5px;
            font-size: 15px;
            text-decoration: none;
            color: inherit
        }
        a:hover{
            color: white;
            box-shadow: inset 400px 0 0 0 #3FC060;
            font-style: italic;
        }
        a.active {
            background-color: #3FC060;
            color: #2c2c2c;
        }
    }
    /* .active{
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 6px;
            height: 100%;
            background: #3FC060;
            border-radius: 0 10px 10px 0;
            font-style: italic;
        }
    } */
`;

export default Navigation;