import React, { useEffect } from "react";
import styled from 'styled-components';
import { Innerlayout } from "../../styles/Layouts";
import { useGlobalContext } from "../../context/Global";
import EarningsModal from "../Modal/EarningsModal";
import EarningsItems from "../EarningsItems/EarningsItems";
import RenderItems from "../EarningsItems/RenderItems";

function Earnings () {

    return (
        <EarningsStyled>
            <Innerlayout>
                <RenderItems />
            </Innerlayout>
        </EarningsStyled>
    )
}

const EarningsStyled = styled.div`
    display: flex;
    .earnings-content{
        display: flex;
        justify-content: flex-end;
    }
    .earnings-container{
        overflow: auto;
        padding: 2rem;
        width: 100%;
        height: 70vh;
        background-color: #f2eee2;
    }

`;

export default Earnings;