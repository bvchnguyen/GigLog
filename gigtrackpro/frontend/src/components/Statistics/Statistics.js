import React from "react";
import styled from 'styled-components'
import { useGlobalContext } from "../../context/Global";
import { Innerlayout } from "../../styles/Layouts";
import EarningsGoals from "../Goals/Goals";

function Statistics () {

    const { totalEarnings } = useGlobalContext();
    const goal = 2200; // Set the goal value here
    const goalDifference = goal - totalEarnings();
    return (
        <StatisticsStyled>
            <Innerlayout>
                <EarningsGoals goal={goal} earnings={goalDifference} />
            </Innerlayout>
        </StatisticsStyled>
    )
}

const StatisticsStyled = styled.div `


`;

export default Statistics;