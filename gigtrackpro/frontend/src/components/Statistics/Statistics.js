import React from "react";
import styled from 'styled-components'
import { useGlobalContext } from "../../context/Global";
import { Innerlayout } from "../../styles/Layouts";
import EarningsGoals from "../Goals/Goals";
import GenInfo from "../GeneralInfo/GenInfo";
import StatsChart from "../Chart/Chart";
import IndivInfo from "../GeneralInfo/IndivInfo";

function Statistics () {

    const { totalEarnings, getAverageTripRatio } = useGlobalContext();
    const goal = 2200; // Set the goal value here
    const goalDifference = goal - totalEarnings();
    return (
        <StatisticsStyled>
            <Innerlayout>
                {/* <EarningsGoals goal={goal} earnings={goalDifference} /> */}
                <div className="statistics-content">
                <GenInfo />
                <IndivInfo />
                <div className="chart-container">
                        <StatsChart />
                    <div className="weekly-stats">
                    </div>
                </div>
               </div>
            </Innerlayout>
        </StatisticsStyled>
    )
}

const StatisticsStyled = styled.div `
    .statistics-content{
        width: 100%;
        padding: 2rem;
        padding-top: 0;
        /* gap: 1rem; */
    }
    .chart-container{
        width: 100%;
        display: flex; 
        flex-direction: row;
        justify-content: flex-start;
        /* background-color: blue; */
        height: 50vh;
        align-items: center;
        /* padding-top: 2rem; */
        gap: 1rem;
        /* padding-right: 1rem; */
        /* margin-right: 10px; */
        align-items: center;
    }
    /* .avgstats-content{
        display: flex;
        flex-direction: column;
        .avgtrip-ratio{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            padding: 1rem;
            background-color: white;
            border-radius: 20px;
            height: 5rem;
            width: 100%;
            p{
                font-size: 10px;
            }
        }
    } */
`;

export default Statistics;