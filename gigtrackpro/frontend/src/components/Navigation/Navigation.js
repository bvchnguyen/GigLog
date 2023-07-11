import React from 'react'
import styled from 'styled-components'
import  avatar from '../../img/avatar.jpg'
import { menuItems } from '../../utils/MenuItems'
import { signout } from '../../utils/Icons' 


function Navigation ({active, setActive}){
    return (
        <NavStyled>
            <div className='user-container'>
                <img  src={avatar} alt ="Avatar"/>
                <div className='text'>
                    <h2>Bach Nguyen</h2>
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
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: white;
    border-radius: 20px;
    padding: 2rem 1.5rem;
    width: 350px;
    height: 100%;
    gap: 2rem;

    .user-container{
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
            border: 2px solid grey;
            
        }
        h2{
            font-family: 'Roboto', sans-serif;
            font-size: 30px;
        }
    }

    .menu-items{
        padding-top: 5rem;
        flex: 1;
        display: flex;
        flex-direction: column;
        font-size: 19px;
        li{
            height: 5vh;
            display: grid;
            grid-template-columns: 30px auto;
            align-items: center;
            margin: .5rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            padding-left: 1rem;
            position: relative;
            /* background-color: blue; */
            border-radius: 5px;
        }
        li:hover{
            color: white;
            box-shadow: inset 400px 0 0 0 #3FC060;
            font-style: italic;
        }
    }
    .active{
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
            font-style: italic;
        }
    }
`;

export default Navigation;