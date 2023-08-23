import React, { useState } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { up, down } from '../../utils/Icons';
import { dropDownItems } from "../../utils/MenuItems";

function DropDownProfile (){
    
    const [open, setOpen] = useState(false);
    
    return (
        <DropDownProfileStyled>
            <div className="profile-btn">
                <button 
                    className={open ? 'active': ''}
                    onClick={() => setOpen(!open)}  
                >First Last { open ? up : down }</button>
            </div>

            {open && (
            <DropDownContent open={open}>
            <ul className='dropdown'>
                {dropDownItems.map((item) => {
                    return <Link 
                        key = {item.id}
                        to={item.link}
                        >
                        {item.icon}                        
                        <span>{item.title}</span>
                       </Link>
                })}
            </ul>
            </DropDownContent>
            )}
        </DropDownProfileStyled>
    )
}

const DropDownContent = styled.div`
  position: absolute;
  background-color: white;
  box-shadow: rgba(0, 30, 43, 0.3) 0px 4px 10px -4px;;
  border-radius: 10px;
  bottom: 100%; /* Position above the profile-btn */
  left: 0;
  display: ${props => (props.open ? 'block' : 'none')};
  width: 100%;
`;

const DropDownProfileStyled = styled.div`
    position: relative;
    width: 100%;
    .profile-btn{
        button{
            padding: 1rem;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 40px;
            background-color: inherit;
            border: none;
            font-size: 15px;
        }
        button:hover{
            background-color: #8ddda1;
            border-radius: 5px;
            cursor: pointer;
        }
        button.active{
            background-color: #8ddda1;
            border-radius: 5px;
        }
    }
    .dropdown{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        height: 155px;
        gap: 1rem;
        padding: .5rem 0 1rem 1rem;
        a{
            display: flex;
            gap: 1rem;
            flex-direction: row;
            text-decoration: none;
            color: inherit;
            font-family: 'Inter' sans-serif;
            margin: .4rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            position: relative;
            border-radius: 5px;
            font-size: 15px;
            text-decoration: none;
        }
    }

`;

export default DropDownProfile;