import React from "react";
import styled from 'styled-components';
import moment from 'moment';
import  {trashDel, dollar, calendar, dash } from "../../utils/Icons";
import UberEatsImage from '../../img/uberEats.png';
import UberPaxImage from '../../img/uber.png';
import DoorDashImage from '../../img/DD.png';
import GrubhubImage from '../../img/GrubHub.png';
import InstaCartImage from '../../img/instacart.png';

function EarningsItems ({
    id,
    amount,
    trip,
    category,
    description,
    totalDist,
    date,
    deleteItem
    }) {

    const formattedDate = moment(date).format('MMMM DD, YYYY');

    const categoryIcon = () => {
        switch (category) {
            case 'Uber Eats':
                return <img src={UberEatsImage} alt="Uber Eats" />;
            case 'DoorDash':
                return <img src={DoorDashImage} alt="DoorDash" />;
            case 'Grubhub':
                return <img src={GrubhubImage} alt="GrubHub" />;
            case 'Uber Pax':
                return <img src={UberPaxImage} alt="Uber Passenger" />;
            case 'InstaCart':
                return <img src={InstaCartImage} alt="InstaCart" />;
            default:
                return null;
        }
    }

    return (
        <EarningsItemsStyled>
            <div className="icon">
                {categoryIcon()}
            </div>
            <div className="content">
                <h4>{category}</h4>
                </div>
                    <div className="text">
                        <p> {trip} Trips</p>
                        <p> {dash} {formattedDate} </p>
                    </div>
            <div className="amount-con">
                <h3> ${amount}</h3>
            </div>
            <div className="btn-con">
                    <button onClick={() => {deleteItem(id)} }>{ trashDel }</button>
            </div>
        </EarningsItemsStyled>
    )
}

const EarningsItemsStyled = styled.div`
    display: flex;
    flex-direction: row;
    background: white;
    border: none;
    border-radius: 20px;
    padding: 1rem;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    height: 5rem;
    width: 100%;
    
    &:hover{
        background-color: white;
        .btn-con{
            button{
                background-color: white;
            }
        }
    }
    .icon{
        width: 60px;
        padding: .2rem;
        height: 40px;
        border-radius: 15px; 
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        /* border: 2px solid #FFFFFF; */
        img{
            
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: contain;
        }
    }
    .content{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 50%;
        gap: .5rem;
        h4{
            color: #2c2c2c;
            font-size: 1rem; 
            position: relative;
            margin-right: 6px;
        }
    }
    button{
        cursor: pointer;
        border: none;
        background-color: #f8f7f0;
        color: #bfbfbf;
    }
    button:hover{
        color: #2c2c2c;
    }
    .text{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: .5rem;
        width: 100%;
        p{
            font-family: Arial, Helvetica, sans-serif;
            font-size: .9rem;
            font-weight: 100;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            opacity: 0.5;
        }
    }
    .amount-con{
        margin-left: 40px;
        h3{
            font-weight: 100;
            font-size: 17px;
        }

    }  
`;

export default EarningsItems;