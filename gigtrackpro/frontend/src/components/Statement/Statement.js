import React from "react";
import styled from 'styled-components'
import { Innerlayout } from "../../styles/Layouts";
import RenderItems from "../EarningsItems/RenderItems";

function Statement () {
    const goalAmount = 550; // Set your goal amount here
    const currentAmount = 200; // Set your current amount here
    return (
        <StatementStyled>
            <Innerlayout>
                <RenderItems />
            </Innerlayout>
        </StatementStyled>
    )
}


const StatementStyled = styled.div `

`;

export default Statement;