import React, { useState }from 'react';
import { useGlobalContext } from '../../context/Global';
import { Bar } from 'react-chartjs-2';
import  {right, left } from "../../utils/Icons";
import styled from 'styled-components';
import dateFormat from 'dateformat';
import {Chart as ChartJs,
    CategoryScale, 
    LinearScale, 
    BarElement, 
    Title, 
    Tooltip, 
    // Legend, 
    ArcElement,
} from 'chart.js';

ChartJs.register(
    CategoryScale, 
    LinearScale,    
    BarElement, 
    Title, 
    Tooltip, 
    // Legend, 
    ArcElement
)

function getDayOfWeek(date) {
    const daysOfWeek = ["SUN", "MON", "TUES", "WED", "THURS", "FRI", "SAT"];
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
  }

function StatsChart() {
    const { earnings } = useGlobalContext();
    const [currentWeekIndex, setCurrentWeekIndex] = useState(0);

    // Group earnings by date
    const earningsByDate = earnings.reduce((acc, earning) => {
        const date = new Date(earning.date);
        const formattedDate = dateFormat(date, 'dd-mm-yyyy');
        acc[formattedDate] = (acc[formattedDate] || 0) + earning.amount;
        return acc;
    }, {});

    // Generate all seven dates (Monday to Sunday) for each week
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - ((startDate.getDay() + 6) % 7));
        const weeks = Array.from({ length: 7 }, (_, index) => {
        const weekStart = new Date(startDate);
        weekStart.setDate(startDate.getDate() + (index * 7));
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + 6);
        return { start: weekStart, end: weekEnd };
    });

    // Sort the weeks in ascending order
    const sortedWeeks = weeks.sort((a, b) => a.start - b.start);

    // Get the current week data based on the selected index
    const currentWeek = sortedWeeks[currentWeekIndex];

  // Generate labels and data for the chart
    const labels = [];
    const data = [];
    const currentDate = new Date(currentWeek.start);
    while (currentDate <= currentWeek.end) {
        const formattedDate = dateFormat(currentDate, 'dd-mm-yyyy');
        const dayOfWeek = getDayOfWeek(currentDate); // Get the day of the week using the function
        labels.push(dayOfWeek); // Use the day of the week as the label
        data.push(earningsByDate[formattedDate] || 0);
        currentDate.setDate(currentDate.getDate() + 1);
    }

    const formattedWeekStart = dateFormat(currentWeek.start, 'mm/dd');
    const formattedWeekEnd = dateFormat(currentWeek.end, 'mm/dd');
    const weekTitle = `${formattedWeekStart} - ${formattedWeekEnd}`;
    
    const chartData = {
        labels: labels,
        datasets: [
        {
            data: data,
            backgroundColor: '#2c2c2c',
            borderColor: '#2c2c2c',
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
        },],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: `${weekTitle}`,
                align: 'start',
                font: {
                    size: 15, // Change the font size to 18px (adjust as needed)
                },
                padding: {
                    bottom: 15, // Change the bottom margin to 10px (adjust as needed)
                },
            }
        },
        maintainAspectRatio: false,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date',
                },
                ticks: {
                    font: {
                        size: 8, // Adjust this value to change the font size for x-axis labels
                    },
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Earnings',
                },
                ticks: {
                    // Use a callback function to modify the label values
                    callback: function (value) {
                      return '$' + value; // Adding the dollar sign before the value
                    },
                },
            },
        },
    };

    const handlePreviousWeek = () => {
        if (currentWeekIndex > 0) {
        setCurrentWeekIndex((prevIndex) => prevIndex - 1);
        }
    };

    const handleNextWeek = () => {
        if (currentWeekIndex < sortedWeeks.length - 1) {
        setCurrentWeekIndex((prevIndex) => prevIndex + 1);
        }
    };

    return (
        <StatsChartstyled>
        {/* <h2>Weekly Earnings</h2> */}
        <div className='display-week'>
            {/* <button onClick={handlePreviousWeek} disabled={currentWeekIndex === 0}>
            {left}
            </button>
            <h3>{weekTitle}</h3>
            <button onClick={handleNextWeek} disabled={currentWeekIndex === sortedWeeks.length - 1}>
            {right}
            </button> */}
        </div>
        <Bar data={chartData} options={options} />
        </StatsChartstyled>
    );
}


const StatsChartstyled = styled.div `
    padding-top: 0%;
    background-color: white;
    width: 100%;
    height: 100%;
    padding: 1rem;
    border-radius: 15px;
    .display-week{
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        button{
            border: none;
            background-color: transparent;
            cursor: pointer;
        }
    }
`;

export default StatsChart;