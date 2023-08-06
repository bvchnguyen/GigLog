import React, { useEffect } from "react";
import styled from 'styled-components'
import { useGlobalContext } from "../../context/Global";
import { Innerlayout } from "../../styles/Layouts";
import WeeklyGoalBar from "../Chart/WeeklyGoalBar";
import StatsChart from "../Chart/Chart";
import WeeklyMetrics from "../GeneralInfo/WeeklyMetrics";
import WeeklyStats from "../GeneralInfo/WeeklyStats";
import DeliveryTable from "../EarningsItems/DeliveryTable";

function Dashboard () {

    const { getCurrentDateString, 
            getWeekNumber, 
            aggregatedData, 
            aggregateEarningsData, 
            getEarnings, 
            getExpense,
            earnings,
            earningsDataMapping } = useGlobalContext();

    const today = getCurrentDateString();
    const currentWeek = getWeekNumber(today);
    const goalAmount = 550.00; /* Temp goalAmount, will replace with custom input */ 
    const MappedData = earningsDataMapping(earnings);
    const data = React.useMemo(() => MappedData, []);

    const columns = React.useMemo(
        () => [
            {
                Header: "Company",
                accessor: "category",
            },
            {
                Header: "Date",
                accessor: "date",
            },
            {
                Header: "Trips",
                accessor: "trip",
            },
            {
                Header: "Amount",
                accessor: "amount",
            },
    ],[]);

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
                            <WeeklyMetrics />
                        </div>
                        <div className="right-container">
                            <WeeklyGoalBar goalAmount={goalAmount.toFixed(2)} />
                            <DeliveryTable columns={columns} data={data} />
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
        width: 45%;
    }
    .chart-container{ 
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 100%;
        width: 55%;
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
        height: 100vh;
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