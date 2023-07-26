import React from "react";
import styled from 'styled-components'
import { useGlobalContext } from "../../context/Global";
import { Innerlayout } from "../../styles/Layouts";
import EarningsGoals from "../Goals/Goals";
import GenInfo from "../GeneralInfo/GenInfo";
import StatsChart from "../Chart/Chart";
import IndivInfo from "../GeneralInfo/IndivInfo";
import Progressbar from "../Chart/ProgressBar";
import { dashboard } from "../../utils/Icons";

function Dashboard () {

    const { totalEarnings, getAverageTripRatio, getWeekNumber } = useGlobalContext();
    const goal = 2200; // Set the goal value here
    const goalDifference = goal - totalEarnings();
    const goalAmount = 550; // Set your goal amount here
    const currentAmount = 200; // Set your current amount here

    return (
        <DashboardStyled>
            <Innerlayout>
                {/* <EarningsGoals goal={goal} earnings={goalDifference} /> */}
                <div className="statistics-content">
                <GenInfo />
                <Progressbar />
                {/* <IndivInfo /> */}
                <div className="chart-container">
                        <StatsChart />
                        {/* <div className="in-between"></div> */}
                        <IndivInfo />
                        {/* <Progressbar goalAmount={goalAmount} currentAmount={currentAmount} /> */}
                </div>
               </div>
            </Innerlayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div `
    .statistics-content{
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 2rem;
        padding-top: 0;
        gap: 2rem;
    }
    .chart-container{
        /* background-color: blue; */
        width: 100%;
        display: flex; 
        flex-direction: row;
        justify-content: flex-start;
        height: 240px;
        align-items: center;
        gap: 3rem;
    }
`;

export default Dashboard;