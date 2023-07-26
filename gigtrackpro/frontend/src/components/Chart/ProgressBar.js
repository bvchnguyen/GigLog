import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Progressbar = ({ goalAmount, currentAmount }) => {
    

    const progressPercentage = () =>{
        if (goalAmount === 0 || goalAmount === null){
            return 0;
        }
        return ((currentAmount / goalAmount) * 100).toFixed(2);
    }
    return (
        <ProgressbarStyled>
            <h2 className='name'>Weekly Goal</h2>
            <p>Earning</p>
            <div className="currentToGoal">
                <h3>${currentAmount}</h3>
                <h3 className="goal-amount">${goalAmount}</h3>
            </div>
            <div className="progress-bar">
            <div
                className="progress-bar__fill"
                style={{ width: `${progressPercentage()}%` }}
            ></div>
        </div>
        <div className="progress-bar__label">
                {progressPercentage()}%
        </div>
        </ProgressbarStyled>
    )
}

const ProgressbarStyled = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 1rem;
    width: 100%;
    border-radius: 10px;
    .name{
        font-family: 'Hind',sans-serif;
        font-size: 17px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    .progress-bar{
        width: 100%;
        height: 10px;
        border-radius: 10px;
        overflow: hidden;
        background-color: #f1f1f1;
        margin-bottom: 3px;
    }
    .progress-bar__fill {
        height: 100%;
        background-image: linear-gradient(to left, #3FC060, #4eef76);
        transition: width 0.3s ease;
        border-radius: 10px;
    }
    .progress-bar__label {
        display: flex;
        align-items: center;
        height: 100%;
        font-size: 10px;
        color: #bbe8c6;
    }
    p{
        font-size: 12px;
        color: #c6c6c6;
    }
    .currentToGoal{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        h3{
            font-family: 'Montserrat', sans-serif;
            font-weight: 500;
            font-size: 16px;
            margin-bottom: 10px;
        }
        .goal-amount{
            font-style: italic;
            color: #c6c6c6;

        }
    }
`;


export default Progressbar;