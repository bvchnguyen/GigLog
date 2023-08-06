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
        getEarnings();    
    }, [])

    return (
        <RenderItemsStyled>
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
        </RenderItemsStyled>
    )
}

const RenderItemsStyled = styled.div`
    
    border-radius: 15px;
    border: solid 2px #e2e2e2;
    background-color: white;
    .earnings-container{
        display: flex;
        flex-direction: column;
        padding-bottom: 2rem;
        overflow: auto;
        padding: 1rem;
        padding-top: 0;
        width: 100%;
        max-height: 25vh;
    }
    .earnings-container::-webkit-scrollbar {
        width: 0.5em; /* Change this value to adjust the scrollbar width */
    }
    .earnings{
        
        height: 100vh;
    }
    .earnings-heading{
        background-color: white;
        position: sticky;
        top: 0;
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