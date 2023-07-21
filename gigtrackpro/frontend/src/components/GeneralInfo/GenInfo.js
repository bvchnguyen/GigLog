import React from "react";
import styled from 'styled-components';
import { useGlobalContext } from "../../context/Global";
// import  { cash, car, gear } from "../../utils/Icons";
import EarningsModal from "../Modal/EarningsModal";
import EarningsItems from "../EarningsItems/EarningsItems";

function GenInfo () {
    
    const {totalEarnings, totalTrips, totalDistance} = useGlobalContext()
    
    return (
        <GenInfoStyled>
            <div className="GenInfo-container">               
                <div className="totalEarnings-container">
                    {/* <div className="totalEarnings-icon">{ cash }</div> */}
                    <h2>${totalEarnings()}</h2>
                    {/* <h2>$30000.00</h2> */}
                    {/* <p>Your 2023</p> */}
                    <p>Net Earnings</p>
                </div>
                <div className="totalTrips-container">
                    {/* <div className="totalTrips-icon">{ car }</div> */}
                    <h2>{totalTrips()}</h2>
                    {/* <p>Your 2023</p> */}
                    <p>Completed Trips</p>
                </div>
                <div className="totalDistance-container">
                    {/* <div className="totalDistance-icon">{ gear }</div> */}
                    <h2>{totalDistance()}mi</h2>
                    {/* <p>2023</p> */}
                    <p>Mileage Driven</p>
                </div>
            </div>

            </GenInfoStyled>
    )
}

const GenInfoStyled = styled.div`

    width: 100%;
    /* padding: 1rem; */
    .GenInfo-container{
        border-radius: 20px;
        background-color: #EAEAEA;
        padding: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        /* gap: 1rem; */
        width: 100%;
        /* opacity: .5; */
    }
    .totalEarnings-container, .totalTrips-container, .totalDistance-container{
        display: flex;
        flex-direction: column;
        width: 100%;
        /* background-color: blue; */
        align-items: center;
        h2{
            color: #2c2c2c;
            letter-spacing: 1px;
            font-size: 30px;
            /* margin-top: 10px;
            margin-bottom: 20px; */
        }
        p{
            font-size: 14px;
            opacity: .5;
        }
    }
`;

export default GenInfo;