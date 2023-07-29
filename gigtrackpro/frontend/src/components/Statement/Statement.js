import React from "react";
import styled from 'styled-components'
import { Innerlayout } from "../../styles/Layouts";
import Progressbar from "../Chart/ProgressBar";

function Statement () {
    const goalAmount = 550; // Set your goal amount here
    const currentAmount = 200; // Set your current amount here
    return (
        <StatementStyled>
            <Innerlayout>
                <Progressbar goalAmount={goalAmount} currentAmount={currentAmount} />
            </Innerlayout>
        </StatementStyled>
    )
}


const StatementStyled = styled.div `

padding: 2rem;

`;

export default Statement;