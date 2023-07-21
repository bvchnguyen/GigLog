import React from 'react'
import styled from 'styled-components'
import  avatar from '../../img/avatar.jpg'
import { menuItems } from '../../utils/MenuItems'
import { signout } from '../../utils/Icons' 
import EarningsModal from '../Modal/EarningsModal'


function Navigation ({active, setActive}){
    return (
        <NavStyled>
            <div className='user-container'>
                <img  src={avatar} alt ="Avatar"/>
                <div className='text'>
                    <h2>Bach Nguyen</h2>
                    <h4>Delivering Since 2020</h4>
                    <EarningsModal />
                </div>
            </div>
            <ul className='menu-items'>
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
            <div className='bottom-nav'>
                <li>
                {signout} Signout
                </li>
            </div>
        </NavStyled>
    )
}

const NavStyled = styled.nav`
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #2c2c2c;
    color: white;
    padding: 2rem 0rem;
    width: 250px;
    height: 100%;
    gap: 2rem;

    .user-container{
        position: relative;
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        img {
            width: 90px;
            height: 90px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid white;
            
        }
        h2{
            font-weight: 100;
            font-size: 20px;
            margin-bottom: .5rem;
        }
        h4{
            font-size: 15px;
            font-weight: 100;
            color: #D0D0D0;
            margin-bottom: 7px;
        }
    }
    .text{
        font-family: 'helvetica';
        display: flex;
        flex-direction: column;
        align-items: center;    
    }
    .menu-items{
        padding-top: 5rem;
        flex: 1;
        display: flex;
        flex-direction: column;
        font-style: normal;
        font-family: 'helvetica';
        letter-spacing: 2px;
        span{
            font-size: 14px;
        }
        li{
            height: 5vh;
            display: grid;
            grid-template-columns: 30px auto;
            align-items: center;
            margin: .5rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            padding-left: 2rem;
            position: relative;
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