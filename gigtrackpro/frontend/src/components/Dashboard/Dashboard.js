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
import WeeklyStats from "../GeneralInfo/WeeklyMetrics";
import GoalMetrics from "../Goals/GoalMetrics";
import GeneralInfo from "../GeneralInfo/GeneralInfo";
import RenderItems from "../EarningsItems/RenderItems";

function Dashboard () {

    const { getCurrentDateString, totalEarnings, getAverageTripRatio, getWeekNumber, getWeeklyEarnings } = useGlobalContext();
    const goalAmount = 550; /* Temp goalAmount, will replace with custom input */ 
    const today = getCurrentDateString();
    const currentWeek = getWeekNumber(today);
    const currentAmount = getWeeklyEarnings(currentWeek);

    console.log('current amount: ', currentAmount)

    return (
        <DashboardStyled>
            <Innerlayout>
                <div className="title">
                    <h3>Hello, Bach!</h3>
                    <p>Here's your weekly overview</p>
                </div>
                <div className="statistics-content">
                    <div className="overview-container">
                    <GeneralInfo />
                    </div>
                    <div className="secondary-container">
                        <div className="chart-container">
                            <StatsChart />
                            {/* <WeeklyStats /> */}
                            {/* <RenderItems /> */}
                            
                        </div>
                        <div className="right-container">
                            <Progressbar goalAmount={goalAmount} currentAmount={currentAmount} />
                            <WeeklyStats />
                            {/* <RenderItems /> */}
                        </div>
                    </div>
               </div> 
            </Innerlayout>

        </DashboardStyled>
    )
}

const DashboardStyled = styled.div `
    .secondary-container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 1rem;
    }
    .right-container{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .chart-container{ 
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 300px;
        width: 60%;
    }
    .title{
        padding: 2rem;
        h3{
            font-size: 25px;
        }
        padding-bottom: 2%;
    }
    .statistics-content{
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 2rem;
        padding-top: 0;
        gap: 2rem;
    }
    .overview-container{
        /* background-color: blue; */
        border-radius: 10px;
        background-color: white;
        width: 100%;
        display: flex; 
        flex-direction: row;
        justify-content: flex-start;
        /* height: 300px; */
        align-items: center;
        gap: 2rem;
    }
`;

export default Dashboard;