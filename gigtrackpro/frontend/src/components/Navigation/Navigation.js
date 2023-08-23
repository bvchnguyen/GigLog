import React from 'react';
import styled from 'styled-components';
import  avatar from '../../img/avatar.jpg';
import { Link } from 'react-router-dom';
import { menuItems, settingItems } from '../../utils/MenuItems';
import { signout } from '../../utils/Icons';
import EarningsModal from '../Modal/EarningsModal';
import ExpenseModal from '../Modal/ExpenseModal';
import DropDownProfile from './ProfileDropdown';

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
            <div className='profile-select'>
                <DropDownProfile />
            </div>
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
    }
    .logo-container{
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
            font-weight: 500;
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
            color: inherit;
        }
        a:hover{
            color: white;
            box-shadow: inset 400px 0 0 0 #8ddda1;
            font-style: italic;
        }
        a.active {
            background-color: #8ddda1;
            color: #2c2c2c;
        }
    }
    a.active{
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 6px;
            height: 100%;
            background: #327f46;
            border-radius: 0 10px 10px 0;
            font-style: italic;
        }
    }
    .profile-select{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 50%;
    }
`;

export default Navigation;