import React from "react";
import styled from 'styled-components';
import { Innerlayout } from "../../styles/Layouts";
import { useGlobalContext } from "../../context/Global";
import EarningsModal from "../Modal/EarningsModal";


function Earnings () {
    
    const {addEarnings} = useGlobalContext()

    return (
        <EarningsStyled>
            <Innerlayout>
               <h1>Earnings</h1>
               <div className="earnings-content">
                    <div className="form-container">
                        <EarningsModal />
                    </div>
                    <div className="Earnings"></div>
               </div>
            </Innerlayout>
        </EarningsStyled>
    )
}

const EarningsStyled = styled.div `


`;

export default Earnings;