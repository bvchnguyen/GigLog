import React, { useEffect } from "react";
import styled from 'styled-components';
import { Innerlayout } from "../../styles/Layouts";
import { useGlobalContext } from "../../context/Global";
import EarningsModal from "../Modal/EarningsModal";
import EarningsItems from "../EarningsItems/EarningsItems";

function Earnings () {
    
    const {addEarnings, earnings, getEarnings} = useGlobalContext()

    useEffect(() =>{
        getEarnings()    
    }, [])

    return (
        <EarningsStyled>
            <Innerlayout>
               <div className="earnings-content">
                    <div className="form-container">
                    </div>
                    <div className="earnings-container">
                        <div className="earnings">
                            {earnings.map((earning) => {
                                const {_id, amount, trip, category, description, date } = earning;
                                return <EarningsItems 
                                    key={_id}
                                    id={_id}
                                    amount={amount}
                                    trip={trip}
                                    category={category}
                                    description={description}
                                    date={date}
                                />
                            })}
                        </div>
                    </div>
               </div>
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