import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';
import { useGlobalContext } from "../../context/Global";

function GoalMetrics (){

    return(
        <GoalMetricsStyled>
            <div className="heading-container">
                <h3 className="name">Path to Goal:</h3>
                <h3 className="name">1 day remaining</h3>
            </div>
        </GoalMetricsStyled>
    )

}

const GoalMetricsStyled = styled.div`
    background-color: white;
    width: 50%;
    height: 100%;
    padding: 1rem;
    .heading-container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        h3, .name{
            font-family: 'Hind',sans-serif;
            font-size: 17px;
            font-weight: bold;
            margin-bottom: 10px;
        }
    }

`;

export default GoalMetrics;