import React from "react";
import styled from 'styled-components'
import { useGlobalContext } from "../../context/Global";
import { Innerlayout } from "../../styles/Layouts";

function Statistics () {

    return (
        <StatisticsStyled>
            <Innerlayout>
            </Innerlayout>
        </StatisticsStyled>
    )
}

const StatisticsStyled = styled.div `
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

export default Statistics;