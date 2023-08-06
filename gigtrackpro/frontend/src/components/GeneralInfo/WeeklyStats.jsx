import React, { useEffect } from "react";
import styled from 'styled-components';
import { useGlobalContext } from "../../context/Global";

function WeeklyStats () {
    
    const { getCurrentDateString, 
            getWeekNumber, 
            getEarnings, 
            getExpense,
            earnings,
            expense,
            getWeeklyFuel, 
            aggregatedData, 
            aggregateEarningsData } = useGlobalContext()

    const today = getCurrentDateString();
    const weekNum = getWeekNumber(today);
     
    useEffect(() => {
        aggregateEarningsData();
    }, [earnings, expense]);
    
    return (
        <WeeklyStatsStyled >     
            {aggregatedData ? (
                <div className="GeneralInfo-container">          
                    <div className="totalEarnings-container">
                        <p>Earnings</p>
                        <h2>${aggregatedData.totalEarnings}</h2>
                    </div>
                    <div className="totalTrips-container">
                        <p>Completed Trips</p>
                        <h2>{aggregatedData.totalTrips}</h2>
                    </div>
                    <div className="totalDistance-container">
                        <p>Mileage Driven</p>
                        <h2>{aggregatedData.totalMi}mi</h2>
                    </div>
                    <div className="totalDistance-container">
                        <p>Compensation</p>
                        <h2>${aggregatedData.compensation}</h2>
                    </div>
                    <div className="totalDistance-container">
                        <p>Fuel Spent</p>
                        <h2>${getWeeklyFuel(weekNum)}</h2>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </WeeklyStatsStyled >
    )
}

const WeeklyStatsStyled = styled.div`
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

export default WeeklyStats;