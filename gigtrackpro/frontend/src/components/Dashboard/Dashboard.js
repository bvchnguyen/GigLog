import React, { useEffect } from "react";
import styled from 'styled-components'
import { useGlobalContext } from "../../context/Global";
import { Innerlayout } from "../../styles/Layouts";
import WeeklyGoalBar from "../Chart/WeeklyGoalBar";
import StatsChart from "../Chart/Chart";
import WeeklyMetrics from "../GeneralInfo/WeeklyMetrics";
import WeeklyStats from "../GeneralInfo/WeeklyStats";

function Dashboard () {

    const { getCurrentDateString, getWeekNumber, getEarnings, getExpense, getWeeklyEarnings } = useGlobalContext();
    const goalAmount = 550; /* Temp goalAmount, will replace with custom input */ 
    const today = getCurrentDateString();
    const currentWeek = getWeekNumber(today);
    const currentAmount = getWeeklyEarnings(currentWeek);
    
    useEffect(() => {
        getExpense()
        getEarnings()
    }, []);

    return (
        <DashboardStyled>
            <Innerlayout>
                <div className="statistics-content">
                    <div className="overview-container">
                    <WeeklyStats />
                    </div>
                    <div className="secondary-container">
                        <div className="chart-container">
                            <StatsChart />
                        </div>
                        <div className="right-container">
                            <WeeklyGoalBar goalAmount={goalAmount} currentAmount={currentAmount} />
                            <WeeklyMetrics />
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
        border-radius: 10px;
        background-color: white;
        width: 100%;
        display: flex; 
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 2rem;
    }
`;

export default Dashboard;