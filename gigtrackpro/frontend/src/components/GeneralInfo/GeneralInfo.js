import React, { useEffect } from "react";
import styled from 'styled-components';
import { useGlobalContext } from "../../context/Global";
import  { cash, car, gear } from "../../utils/Icons";
import EarningsModal from "../Modal/EarningsModal";
import EarningsItems from "../EarningsItems/EarningsItems";

function GeneralInfo () {
    
    const { getExpense,
            getCurrentDateString,
            totalEarnings,
            totalTrips, 
            totalDistance, 
            getMonthlyEarnings, 
            getWeeklyTrips, 
            getWeekNumber, 
            getWeeklyEarnings,
            getWeeklyDistance,
            getTotalFuel} = useGlobalContext();
    
    const currentDate = getCurrentDateString();
    const weekNum = getWeekNumber(currentDate);
    
    useEffect(() =>{
        getExpense()    
    }, [])

    return (
        <GeneralInfoStyled>
            <div className="GeneralInfo-container">               
                <div className="totalEarnings-container">
                    <p>Earnings</p>
                    <h2>${getWeeklyEarnings(weekNum)}</h2>
                </div>
                <div className="totalTrips-container">
                    <p>Completed Trips</p>
                    <h2>{getWeeklyTrips(weekNum)}</h2>
                </div>
                <div className="totalDistance-container">
                    <p>Mileage Driven</p>
                    <h2>{getWeeklyDistance(weekNum)}mi</h2>
                </div>
                <div className="totalDistance-container">
                    <p>Compensation</p>
                    <h2>${(getWeeklyDistance(weekNum) * 0.655).toFixed(2)}</h2>
                </div>
                <div className="totalDistance-container">
                    <p>Fuel Spent</p>
                    <h2>${getTotalFuel()}</h2>
                </div>
            </div>

            </GeneralInfoStyled>
    )
}

const GeneralInfoStyled = styled.div`
    width: 100%;
    color: #2c2c2c;
    font-family: Arial, Helvetica, sans-serif;
    .GeneralInfo-container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 1rem;
    }
    .totalEarnings-container, .totalTrips-container, .totalDistance-container {
        display: flex;
        flex-direction: column;
        width: 200px;
        height: 120px;
        padding: 1rem;
        border-radius: 15px;
        border: solid 2px #e2e2e2;
        background-color: white;
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
`;

export default GeneralInfo;