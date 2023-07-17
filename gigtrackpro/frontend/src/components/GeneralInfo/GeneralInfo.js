import React from "react";
import styled from 'styled-components';
import { useGlobalContext } from "../../context/Global";
import  { cash, car, gear } from "../../utils/Icons";
import EarningsModal from "../Modal/EarningsModal";
import EarningsItems from "../EarningsItems/EarningsItems";

function GeneralInfo () {
    
    const {totalEarnings, totalTrips, totalDistance} = useGlobalContext()
    
    return (
        <GeneralInfoStyled>
            <div className="GeneralInfo-container">               
                <div className="totalEarnings-container">
                    <div className="totalEarnings-icon">{ cash }</div>
                    <h2>${totalEarnings()}</h2>
                    {/* <h2>$30000.00</h2> */}
                    <p>Your 2023</p>
                    <p>Net Earnings</p>
                </div>
                <div className="totalTrips-container">
                    <div className="totalTrips-icon">{ car }</div>
                    <h2>{totalTrips()}</h2>
                    <p>Your 2023</p>
                    <p>Completed Trips</p>
                </div>
                <div className="totalDistance-container">
                    <div className="totalDistance-icon">{ gear }</div>
                    <h2>{totalDistance()}mi</h2>
                    <p>2023</p>
                    <p>Mileage Driven</p>
                </div>
            </div>

            </GeneralInfoStyled>
    )
}

const GeneralInfoStyled = styled.div`
    color: #2c2c2c;
    font-family: Arial, Helvetica, sans-serif;
    .GeneralInfo-container{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 1rem;
    }
    .totalEarnings-container, .totalTrips-container, .totalDistance-container {
        display: flex;
        flex-direction: column;
        width: 180px;
        height: 170px;
        padding: 1.5rem;
        border-radius: 35px;
        background-color: #76c486;
        h2{
            letter-spacing: 1px;
            font-size: 30px;
            margin-top: 10px;
            margin-bottom: 20px;
        }
        .totalEarnings-icon, .totalTrips-icon, .totalDistance-icon{
            font-size: 30px;
        }
        p{
            font-size: 14px;
        }
    }
    .totalTrips-container{

    }
`;

export default GeneralInfo;