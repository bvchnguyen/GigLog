import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';
import { useGlobalContext } from "../../context/Global";

function EarningsGoals ({ goal, earnings }) {

    const { getAverageTripRatio } = useGlobalContext()
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress((earnings / goal) * 100);
    }, [goal, earnings]);
  
    const data = {
      labels: ['Progress', 'Remaining'],
      datasets: [
        {
          data: [ 100 - progress, progress],
          backgroundColor: ['#3FC060', '#EAEAEA'],
          borderRadius: [20, 20],
          borderWidth: [0, 0],
          borderColor: ['#EAEAEA', '#EAEAEA'],
          borderAlign: ['inner','outer']    

        },
      ],
    };
  
    const options = {
        cutout: '80%',
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },
      };
    const textStack = {
        id: 'textStack',
        beforeDatasetsDraw(chart, args, pluginOptions){
            const { ctx, chartArea: {top, bottom, left, right, width, height} } = chart;

            ctx.save();
            const fontHeight = 30;
            // ctx.font = 'bolder 30px helvetica'
            ctx.font = `bolder ${fontHeight}px helvetica`;
            ctx.fillStyle = '#2c2c2c';
            ctx.textAlign = 'center';
            // ctx.fillText(`$${earnings.toFixed(2)}`, width / 2, height / 2 + 10);
            ctx.fillText(`$${earnings}`, width / 2, height / 2 + 10);
            ctx.restore();

            ctx.font = 'bold 10px roboto'
            ctx.textAlign = 'center';
            // ctx.fillText(`Out of $${goal.toFixed(2)}`, width / 2, height / 2 + top + 35);
            ctx.fillText(`Out of $${goal}`, width / 2, height / 2 + top + 35);
            ctx.restore();

            ctx.font = 'bold 17px helvetica'
            ctx.textAlign = 'center';
            ctx.fillText('Remaining', width / 2, height / 2 + top - 30);

            ctx.fillStyle = 'black';
            // ctx.fillRect(width / 2, top, 1, bottom);
            // ctx.fillRect(left, height / 2 + top, right, 1)
        }
    }

    return(
        
        <EarningsGoalsStyled>
            <div className="goals-container">
                <Doughnut data={data} options={options} plugins={[textStack]}/>
                {/* <Doughnut data={data} options={options}/> */}
                {/* <div className="avgstats-content">
                    <div className="avgtrip-ratio">
                        <h2>${getAverageTripRatio()}</h2>
                        <div>
                            <p>Per Trip Completed</p>
                        </div>
                    </div>
                    <div className="avgtrip-ratio">
                        hello
                    </div>
                    <div className="avgtrip-ratio">
                        hello
                    </div>
                </div> */}
            </div>
                {/* <span>Earnings: ${earnings}</span>
                <span>Goal: ${goal}</span> */}
        </EarningsGoalsStyled>
        
    )
}

const EarningsGoalsStyled = styled.div`
    /* background-color: tan; */
    /* width: 100%; */
    /* height: 40vh;
    padding: 2rem; */
    .goals-container{
        /* background-color: blue; */
        display: flex;
        flex-direction: row;
        justify-content: center;
        /* gap: 5rem; */
        width: 100%;
        height: 40vh;
        padding: 3rem;
    }
    .avgstats-content{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .avgtrip-ratio{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            padding: 1rem;
            background-color: white;
            border-radius: 20px;
            height: 4rem;
            width: 240px;
        }
    }
`;

export default EarningsGoals;