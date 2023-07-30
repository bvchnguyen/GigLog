import React, { useState, useEffect }  from "react";
import styled from 'styled-components';
import { useGlobalContext } from "../../context/Global";
import EarningsModal from "../Modal/EarningsModal";
import EarningsItems from "../EarningsItems/EarningsItems";

function WeeklyStats (){

    const [borderColor, setBorderColor] = useState('white');

    const { getCurrentDateString, 
            getWeekNumber, 
            totalEarnings, 
            getWeeklyEarnings,
            getWeeklyTrips,
            getWeeklyDistance,
            getAverageTripRatio,
            getWeeklyAverageTripRatio,
            getTotalExpense,
            getTotalFuel } = useGlobalContext();

    const today = getCurrentDateString();
    const weekNum = getWeekNumber(today);
    const condition = 1.7;
    const earningCondition = 100;
    const stats = getWeeklyAverageTripRatio(weekNum);
    const earningStats = getWeeklyEarnings(weekNum);

    console.log('stats: ', stats);

    /* Algorithm to determine if trip count will meet the weekly goal */
    const DollarsPerTripsCondition = () => {
        let weeklyEarning = earningStats;
        let weeklyGoal = 550;
        let weeklyTrips = getWeeklyTrips(weekNum);

        return weeklyEarning / weeklyTrips;
        
    }

    const checkBorderColor = (stats, conditionMet) => {
        if (stats >= conditionMet) {
            return '#3FC060';
        } 
        else if (stats < conditionMet ){
            return '#fec487';
        }
        else{
            return 'white';
        }
    };

    return (
        <WeeklyStatsStyled>
            <h2 className='metrics-title'>Metrics</h2>
            <div className="avgstats-content">
            <div className="indi-content" style={{ border: `2px solid ${checkBorderColor(earningStats, earningCondition)}`}}>
                <div className="inner-content">
                    <div className="text">
                        <p>Dollars / trip</p>
                        <h2>${(getWeeklyEarnings(weekNum) / getWeeklyTrips(weekNum)).toFixed(2)}</h2>
                    </div>
                    <div className="miles-rating">
                        <h6>Good</h6>
                    </div>
                </div>
            </div>
            <div className="indi-content" style={{ border: `2px solid ${checkBorderColor(stats, condition)}`}}>
                <div className="inner-content">
                    <div className="text">
                        <p className="box-label">Dollars / mi</p>
                        <h2>${stats}</h2>
                    </div>
                    <div className="miles-rating">
                        <h6>Good</h6>
                    </div>
                </div>
            </div>
            <div className="indi-content" style={{ border: `2px solid ${checkBorderColor(stats, condition)}`}}>
                <div className="inner-content">
                    <div className="text">
                        <p className="box-label">Daily Avg</p>
                        <h2>$75</h2>
                    </div>
                    <div className="miles-rating">
                        <h6>Good</h6>
                    </div>
                </div>
            </div>
            <div className="indi-content" style={{ border: `2px solid ${checkBorderColor(stats, condition)}`}}>
                <div className="inner-content">
                    <div className="text">
                        <p className="box-label">Trips / Day</p>
                        <h2>7.4</h2>
                    </div>
                    <div className="miles-rating">
                        <h6>Good</h6>
                    </div>
                </div>
            </div>
        </div>
        </WeeklyStatsStyled>
    )

}
const WeeklyStatsStyled = styled.div`
    width: 100%;
    border-radius: 15px;
    border: solid 2px #e2e2e2;
    .metrics-title{
        padding: 1rem;
        padding-bottom: 0;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 200;
        font-size: 17px;
        letter-spacing: 1px;
        margin-bottom: 10px;
    }
    .avgstats-content{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 1rem;
        gap: 1rem;
        .indi-content{
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 1rem;
            border-radius: 5px;
            height: 100px;
            width: 22%;
            gap: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            .inner-content{
                display: flex;
                flex-direction: column;
                gap: .5rem;
                .text{
                    width: 100%;
                    margin-right: 30px;
                    p{
                        font-size: 12px;
                    }
                    h2{
                        color: #2c2c2c;
                        font-size: 17px; 
                    }
                }
            }
            .miles-rating, .hours-rating, .fuel-rating{
                display: flex;
                width: 35px;
                height: 20px;
                align-items: center;
                justify-content: center;
                border-radius: 5px;
                padding: 2px;
                h6{
                    color: #3FC060;
                    font-size: 10px;
                }
            }
            .miles-rating, .fuel-rating{
                border-color: #3FC060;
                border: 1px solid #3FC060;
                background-color: white;
            }
            .hours-rating{
                background-color: #FFA94C;
            }
        }
        
    }
`;

export default WeeklyStats;