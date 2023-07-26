import React, { useContext, useState } from "react"
import axios from "axios"

const BASE_URL = 'http://localhost:3000/api/v1/';

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {
    
    const [earnings, setEarnings] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState([null])
    
    /* Function to get the current date as a string */ 
    const getCurrentDateString = () => {
        const currentDate = new Date();
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return currentDate.toLocaleDateString(undefined, options);
    }
    /* Function to get current week's number */ 
    /* This is so we can compare it with the date of the log */ 
    const getWeekNumber = (date) => {
        const weekStart = new Date(date);
        weekStart.setDate(weekStart.getDate() - (weekStart.getDay() + 6) % 7 + 1);
        const firstThursday = new Date(weekStart.getFullYear(), 0, 4);
        const weekNumber = Math.ceil(((weekStart - firstThursday) / 86400000 + 1) / 7);
        return weekNumber;
    }
    /* Function to add earnings upon logging */ 
    const addEarnings = async (earnings) => {
        try{
            const response = await axios.post(`${BASE_URL}add-earning`, earnings)
            /* Render after adding a trip */
            getEarnings()
        }
        catch (error){
            if (error.response) {
                setError(error.response.data.message);
            } else {
                setError("An error occurred while making the add post.")
            }   
        }
    }
    /* Function to render earnings/trips upon logging */ 
    const getEarnings = async () => {
        try {
            const response = await axios.get(`${BASE_URL}get-earning`)
            setEarnings(response.data)
            // console.log(response.data)
            // Process the response.data here
        } catch (error) {
            if (error.response) {
                setError(error.response.data.message);
            } else {
                setError("An error occurred while making the get request.")
            }
        }
    }
    /* Function to delete earnings/trips from the database */ 

    const deleteEarnings = async (id) =>{
        try{
            const response = await axios.delete(`${BASE_URL}delete-earning/${id}`);
            /* Render database after a deletion is done */
            getEarnings();
        }
        catch (error){
            if (error.response) {
                setError(error.response.data.message);
            } else {
                setError("An error occurred while making the delete request.")
            }
        }
    }
    const addExpense = async (expenses) => {
        try{
            const response = await axios.post(`${BASE_URL}add-expense`, expenses)
            /* Render after adding a trip */
            getExpense()
        }
        catch (error){
            if (error.response) {
                setError(error.response.data.message);
            } else {
                setError("An error occurred while making the add post.")
            }   
        }
    }
    const getExpense = async () =>{
        try {
            const response = await axios.post(`${BASE_URL}get-expense`)
            setEarnings(response.data)
            // console.log(response.data)
            // Process the response.data here
        } catch (error) {
            if (error.response) {
                setError(error.response.data.message);
            } else {
                setError("An error occurred while making the get request.")
            }
        }
    }
    const deleteExpense = async (id) =>{
        try{
            const response = await axios.delete(`${BASE_URL}delete-expense/${id}`);
            /* Render database after a deletion is done */
            getExpense();
        }
        catch (error){
            if (error.response) {
                setError(error.response.data.message);
            } else {
                setError("An error occurred while making the delete request.")
            }
        }
    }
    /* Function to get the total (all time) earnings of the user */
    const totalEarnings = () => {
        let totalEarningsAmount = 0;
        earnings.forEach((earning) => {
            totalEarningsAmount += earning.amount
        })
        return totalEarningsAmount.toFixed(2);
    }
    /* Function to get the total (monthy) earnings of the user */
    const getMonthlyEarnings = (thisMonth) => {
        let monthlyEarning = 0;
        let dateString = '';
        earnings.forEach((earning) => {
            dateString = earning.date;
            const dateObject = new Date(dateString);
            const month = dateObject.getMonth();
            if (month === thisMonth){
                monthlyEarning += earning.amount
            }
        })
        return monthlyEarning.toFixed(2);
    }
    /* Function to get the total (weekly) earnings of the user */
    const getWeeklyEarnings = (thisWeek) => {
        let weeklyEarning = 0;
        let dateString = '';
        earnings.forEach((earning) => {
            dateString = earning.date;
            const dateObject = new Date(dateString);
            const weekNumber = getWeekNumber(dateObject);
            if (weekNumber === thisWeek){
                // console.log('adding:', earning.amount)
                weeklyEarning += earning.amount
            }
        })
        return weeklyEarning.toFixed(2);
    }

    /* Function to get the total (all time) trip count of user */
    const totalTrips = () =>{
        let totalTripsMade = 0;
        earnings.forEach((earning) => {
            totalTripsMade += earning.trip
        })
        return totalTripsMade;
    }

    /* Function to get the total (monthy) trip count of user */
    const getMonthlyTrip = (thisMonth) => {
        let monthyTrips = 0;
        let dateString = '';
        earnings.forEach((earning) => {
            dateString = earning.date;
            const dateObject = new Date(dateString);
            const month = dateObject.getMonth();
            if (month === thisMonth){
                monthyTrips += earning.trip
            }
        })
        return monthyTrips;
    }
    /* Function to get the total (weekly) trip count of user */
    const getWeeklyTrips = (thisWeek) => {
        let weeklyTrips = 0;
        let dateString = '';
        earnings.forEach((earning) => {
            dateString = earning.date;
            const dateObject = new Date(dateString);
            const weekNumber = getWeekNumber(dateObject);
            if (weekNumber === thisWeek){
                // console.log('adding:', earning.amount)
                weeklyTrips += earning.trip
            }
        })
        return weeklyTrips;
    }
    /* Function to get the total (all time) distance driven of user */
    const totalDistance = () =>{
        let eachDistance = 0;
        let totalDistance = 0;
        earnings.forEach((earning) => {
            eachDistance = earning.endingMi - earning.startingMi
            totalDistance += eachDistance
        })
        return totalDistance;
    }
    /* Function to get the total (weekly) distance driven of user */
    const getWeeklyDistance = (thisWeek) => {
        let eachDistance = 0;
        let weeklyDistance = 0;
        let dateString = '';
        earnings.forEach((earning) => {
            dateString = earning.date;
            const dateObject = new Date(dateString);
            const weekNumber = getWeekNumber(dateObject);
            if (weekNumber === thisWeek){
                eachDistance = earning.endingMi - earning.startingMi
                weeklyDistance += eachDistance
            }
        })
        return weeklyDistance;
    }
    /* Function to get the avg of Dollars to Miles Ratio of all time earnings */
    const getAverageTripRatio = () => {
        /* NaN checker, so we don't divide by 0 and get a NaN */
        if (totalDistance() === 0){
            return 0;
        }
        return (totalEarnings() / totalDistance()).toFixed(1);
    }
    /* Function to get the avg of Dollars to Miles Ratio of weekly earnings */
    const getWeeklyAverageTripRatio = (thisWeek) => {
        /* NaN checker, so we don't divide by 0 and get a NaN */
        if (getWeeklyDistance(thisWeek) === 0){
            return 0;
        }
     return (getWeeklyEarnings(thisWeek) / getWeeklyDistance(thisWeek)).toFixed(1);
    }

    return (
        <GlobalContext.Provider value ={{
            getCurrentDateString,
            addEarnings,
            getEarnings,
            earnings,
            expenses,
            addExpense,
            getExpense,
            deleteExpense,
            getWeekNumber,
            deleteEarnings,
            totalEarnings,
            getMonthlyEarnings,
            getWeeklyEarnings,
            totalTrips,
            getMonthlyTrip,
            getWeeklyTrips,
            totalDistance,
            getWeeklyDistance,
            getAverageTripRatio,
            getWeeklyAverageTripRatio
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}