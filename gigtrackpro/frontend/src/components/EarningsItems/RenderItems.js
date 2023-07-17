import React, { useEffect } from "react";
import styled from 'styled-components';
import { Innerlayout } from "../../styles/Layouts";
import { useGlobalContext } from "../../context/Global";
import EarningsModal from "../Modal/EarningsModal";
import EarningsItems from "../EarningsItems/EarningsItems";
import GeneralInfo from "../GeneralInfo/GeneralInfo";

function RenderItems () {
    
    const {addEarnings, getEarnings, earnings, deleteEarnings } = useGlobalContext()

    useEffect(() =>{
        getEarnings()    
    }, [])

    return (
        <RenderItemsStyled>
            <Innerlayout>
               <div className="earnings-content">
                    <div className="earnings-container">
                        <div className="earnings-heading">
                            <h3>Recent Trips</h3>  
                        </div>
                        <div className="earnings">
                            {earnings.map((earning) => {
                                const {_id, amount, trip, category, date, startingMi, endingMi } = earning;
                                return <EarningsItems 
                                    key={_id}
                                    id={_id}
                                    amount={amount}
                                    trip={trip}
                                    category={category}
                                    totalDist={endingMi - startingMi + ' mi'}
                                    date={date}
                                    deleteItem={deleteEarnings}
                                />
                            })}
                        </div>
                    </div>
               </div>
            </Innerlayout>
        </RenderItemsStyled>
    )
}

const RenderItemsStyled = styled.div`

    .earnings-content{
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        height: 100vh;
        width: 450px;
    }
    .earnings-container{
        display: flex;
        flex-direction: column;
        padding-bottom: 2rem;
        overflow: auto;
        padding: 2rem;
        padding-top: 0;
        width: 100%;
        max-height: 60vh;
        background-color: #f2eee2;
    }
    .earnings{
        /* position: relative; */
        height: 100vh;
    }
    .earnings-heading{
        position: sticky;
        top: 0;
        background-color: #f2eee2;
        height: 50px;
        width: 100%;
        z-index: 1;
        padding: 1rem;
        padding-left: 0;
        h3{
            font-family: Arial, Helvetica, sans-serif;
            font-weight: 200;
            font-size: 17px;
            letter-spacing: 1px;
        }
    }
`;

export default RenderItems;