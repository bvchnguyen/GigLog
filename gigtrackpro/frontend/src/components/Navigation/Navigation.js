import React from 'react'
import styled from 'styled-components'
import  avatar from '../../img/avatar.jpg'
import { menuItems, settingItems } from '../../utils/MenuItems'
import { signout } from '../../utils/Icons' 
import EarningsModal from '../Modal/EarningsModal'
import ExpenseModal from '../Modal/ExpenseModal'

function Navigation ({active, setActive}){
    return (
        <NavStyled>
            <div className='logo-container'>
                <img  src={avatar} alt ="Avatar"/>
                <h2>GigTrackPro</h2>
            </div>
            <div className='log-btns'>
                        <EarningsModal />
                        <ExpenseModal />
                    </div>
            <ul className='menu-items'>
                <h2>MAIN MENU</h2>
                {menuItems.map((item) => {
                    return <li 
                        key = {item.id}
                        // Set item ID upon click
                        onClick={() => setActive(item.id)}
                        // If active Matches item ID, then className is active, otherwise nothing
                        className={active === item.id ? 'active': ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            <ul className='menu-items'>
                <h2>SETTING</h2>
                {settingItems.map((item) => {
                    return <li 
                        key = {item.id}
                        // Set item ID upon click
                        onClick={() => setActive(item.id)}
                        // If active Matches item ID, then className is active, otherwise nothing
                        className={active === item.id ? 'active': ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            <div className='bottom-nav'>

            </div>
        </NavStyled>
    )
}

const NavStyled = styled.nav`
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: #101214;
    color: white;
    padding: 1rem 1rem;
    width: 240px;
    height: 100%;
    gap: 2rem;

    .log-btns{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: .5rem;
        /* padding: 2rem;  */
    }
    .logo-container{
        /* position: relative; */
        /* height: 100px; */
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: .5rem;
        img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            object-fit: cover;
            /* border: 2px solid white; */   
        }
        h2{
            font-weight: 100;
            font-size: 15px;
            margin-bottom: .5rem;
        }
    }
    .menu-items{
        display: flex;
        flex-direction: column;
        font-style: normal;
        font-family: 'helvetica';
        letter-spacing: 2px;
        h2{
            padding: 0rem 1rem;
            font-size: 12px;
            font-weight: 100;
        }
        span{
            font-size: 12px;
        }
        li{
            height: 4vh;
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
        }
        li:hover{
            color: white;
            box-shadow: inset 400px 0 0 0 #3FC060;
            font-style: italic;
        }
        li.active {
            background-color: #3FC060;
            color: #2c2c2c;
            font-style: italic;
        }   
    }
    .active{
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 6px;
            height: 100%;
            background: #2e8b46;
            border-radius: 0 10px 10px 0;
            font-style: italic;
        }
    }
`;

export default Navigation;