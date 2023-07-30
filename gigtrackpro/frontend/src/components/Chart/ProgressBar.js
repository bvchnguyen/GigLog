import { weekdays } from 'moment';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Progressbar = ({ goalAmount, currentAmount }) => {
    

    const progressPercentage = () =>{
        if (goalAmount === 0 || goalAmount === null){
            return 0;
        }
        return ((currentAmount / goalAmount) * 100).toFixed(2);
    }

    const getWeekDates = () => {
        const today = new Date();
        const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)
      
        // Calculate the date of Monday (first day of the week)
        const monday = new Date(today);
        monday.setDate(today.getDate() - dayOfWeek + 1);
      
        // Create an array to store the dates for all seven days of the week
        const weekDates = [];
        for (let i = 0; i < 7; i++) {
          const currentDate = new Date(monday);
          currentDate.setDate(monday.getDate() + i);
          weekDates.push(currentDate);
        }
      
        return weekDates;
    };
    const weekDates = getWeekDates();
    const formattedDates = weekDates.map((date) =>
        date.toLocaleString('en-US', { day: 'numeric' })
    );
    // const formattedDays = weekDates.map((date) =>
    //     date.toLocaleString('en-US', { weekday: 'short' })
    // );

    console.log(formattedDates);

    return (
        <ProgressbarStyled>
            <h2 className='name'>Weekly Goal</h2>
            <div className="currentToGoal">
                <h3 className="percentage">{progressPercentage()}%</h3>
                <h3 className="goal-amount"> ${goalAmount}</h3>
                {/* <h3 className="percentage">{progressPercentage()}%</h3> */}
            </div>
            <div className="progress-bar">
            <div
                className="progress-bar__fill"
                style={{ width: `${progressPercentage()}%` }}
            ></div>
        </div>
        <TargetsContStyled>
            <h3>1 day remaining</h3>
            <h3>$190 away from goal</h3>
        </TargetsContStyled>
        </ProgressbarStyled>
    )
}

const TargetsContStyled = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
    height: 80px;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    h3{
        font-family: Arial, Helvetica, sans-serif;
        padding: 5px;
        color: black;
        border-radius: 5px;
        font-size: 12px;
    }
`;

const ProgressbarStyled = styled.div`
    border-radius: 15px;
    border: solid 2px #e2e2e2;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 1rem;
    width: 100%;
    height: 150px;
    .name{
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 200;
        font-size: 17px;
        letter-spacing: 1px;
        margin-bottom: 10px;
    }
    .progress-bar{
        width: 100%;
        height: 15px;
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