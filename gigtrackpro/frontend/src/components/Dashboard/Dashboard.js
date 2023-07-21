import React, { useEffect } from "react";
import styled from 'styled-components';
import { Innerlayout } from "../../styles/Layouts";
import { useGlobalContext } from "../../context/Global";
// import EarningsModal from "../Modal/EarningsModal";
// import EarningsItems from "../EarningsItems/EarningsItems";
import GeneralInfo from "../GeneralInfo/GeneralInfo";
import StatsChart from "../Chart/Chart";

function Dashboard () {
    
    const { getEarnings } = useGlobalContext()

    useEffect(() =>{
        getEarnings()    
    })

    return (
        <DashboardStyled>
            <Innerlayout>
               <div className="dashboard-content">
                <GeneralInfo />
                <div className="chart-container">
                    <StatsChart />
                </div>
               </div>
            </Innerlayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
    .dashboard-content{
        width: 100%;
        padding-left: 2rem;
    }
    .chart-container{
        display: flex; 
        flex-direction: column;
        justify-content: flex-start;
        /* background-color: blue; */
        height: 50vh;
        align-items: center;
        padding-top: 2rem;
        padding-right: 1rem;
        margin-right: 10px;
    }
`;

export default Dashboard;