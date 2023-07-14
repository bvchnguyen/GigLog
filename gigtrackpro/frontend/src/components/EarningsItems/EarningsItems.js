import React from "react";
import styled from 'styled-components';
import moment from 'moment';
import  {trash, dollar, calendar, dash} from "../../utils/Icons";

function EarningsItems ({
    id,
    amount,
    trip,
    category,
    description,
    date
    }) {

    const formattedDate = moment(date).format('MM-DD-YYYY');

    return (
        <EarningsItemsStyled>
            <div className="icon"></div>
            <div className="content">
                <h4>{category}</h4>
                <div className="inner-content">
                    <div className="text">
                        <p> {trip} Trips</p>
                        <p> {dash} {formattedDate} </p>
                    </div>
                        {/* <h2> {dollar}{amount} </h2> */}
                </div>
            </div>
            <div className="amount-con">
                <h3> ${amount}</h3>
            </div>
        </EarningsItemsStyled>
    )
}

const EarningsItemsStyled = styled.div`
    display: flex;
    flex-direction: row;
    background: #f8f7f0;
    border: none;
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    height: 5rem;
    width: 100%;
    
    &:hover{
        background-color: white;
    }
    .icon{
        width: 60px;
        height: 60px;
        border-radius: 20px; 
        background: #F5F5F5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #FFFFFF;
        i{
            font-size: 2.6rem;
        }
    }
    .content{
        flex: 1;
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: .5rem;
        h4{
            color: #2c2c2c;
            font-size: 1rem; 
            position: relative;
        }
    }
    .inner-content{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .text{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: .5rem;
            p{
                font-family: Arial, Helvetica, sans-serif;
                font-size: .8rem;
                font-weight: 100;
                display: flex;
                align-items: center;
                gap: 0.5rem;
                opacity: 0.5;
            }
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