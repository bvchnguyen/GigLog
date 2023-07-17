import React, { useEffect } from "react";
import styled from 'styled-components';
import { Innerlayout } from "../../styles/Layouts";
import { useGlobalContext } from "../../context/Global";
import EarningsModal from "../Modal/EarningsModal";
import EarningsItems from "../EarningsItems/EarningsItems";
import GeneralInfo from "../GeneralInfo/GeneralInfo";
import ChartComponent from "../Chart/Chart";

function Dashboard () {
    
    const {addEarnings, getEarnings, earnings, deleteEarnings } = useGlobalContext()

    useEffect(() =>{
        getEarnings()    
    }, [])

    return (
        <DashboardStyled>
            <Innerlayout>
               <div className="dashboard-content">
                <GeneralInfo />
                {/* <ChartComponent /> */}
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
`;

export default Dashboard;