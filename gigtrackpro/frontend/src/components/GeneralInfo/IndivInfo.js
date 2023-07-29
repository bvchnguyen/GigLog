import React from "react";
import styled from 'styled-components';
import { useGlobalContext } from "../../context/Global";
import  { car, clock, gas } from "../../utils/Icons";
import EarningsModal from "../Modal/EarningsModal";
import EarningsItems from "../EarningsItems/EarningsItems";

function IndivInfo (){

    const { getCurrentDateString, 
            getWeekNumber, 
            totalEarnings, 
            getAverageTripRatio, 
            getWeeklyAverageTripRatio,
            getTotalExpense,
            getTotalFuel } = useGlobalContext();

    const today = getCurrentDateString();
    const weekNum = getWeekNumber(today);

    return (
        <IndivInfoStyled>
        <div className="avgstats-content">
        <div className="indi-content">
                <div className="icon">
                    {car}
                </div>
                <div className="inner-content">
                    <div className="text">
                        <p>Dollars per mi</p>
                        <h2>${getWeeklyAverageTripRatio(weekNum)}</h2>
                    </div>
                </div>
                <div className="miles-rating">
                    <h6>Good</h6>
                </div>
            </div>
            <div className="indi-content">
                <div className="icon">
                    {clock}
                </div>
                <div className="inner-content">
                    <div className="text">
                        <p>Hours Online</p>
                        <h2>25h</h2>
                    </div>
                </div>
                <div className="hours-rating">
                    <h6>Fair</h6>
                </div>
            </div>
            <div className="indi-content">
                <div className="icon">
                    {gas}
                </div>
                <div className="inner-content">
                    <div className="text">
                        <p>Fuel</p>
                        {/* <h2>${getTotalFuel()}</h2> */}
                        <h2>${getTotalExpense()}</h2>
                    </div>
                </div>
                <div className="fuel-rating">
                    <h6>low</h6>
                </div>
            </div>
            </div>
        </IndivInfoStyled>
    )

}

const IndivInfoStyled = styled.div`
    width: 100%;
    .avgstats-content{
        /* background-color: red; */
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .indi-content{
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 1rem;
            background-color: white;
            border-radius: 15px;
            height: 70px;
            width: 100%;
            gap: 10px;
            .icon {
                width: 45px;
                height: 45px;
                background-color: #EAEAEA;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 20px;
            }
            .inner-content{
                display: flex;
                flex-direction: column;
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
                /* background-color: #3FC060; */
                padding: 2px;
                h6{
                    color: white;
                    font-size: 10px;
                }
            }
            .miles-rating, .fuel-rating{
                background-color: #3FC060;
            }
            .hours-rating{
                background-color: #FFA94C;
            }
        }
        
    }
`;

export default IndivInfo;