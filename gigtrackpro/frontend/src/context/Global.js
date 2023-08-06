import React, { useContext, useState } from "react"
import axios from "axios"

const BASE_URL = 'http://localhost:3000/api/v1/';

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {
    
    const [earnings, setEarnings] = useState([]);
    const [expense, setExpense] = useState([]);
    const [aggregatedData, setAggregatedData] = useState([]);
    const [error, setError] = useState([null]);
    
    const formatDate = (date) => {
        const dateString = new Date(date); 
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return dateString.toLocaleDateString(undefined, options);
    }
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
            const response = await axios.get(`${BASE_URL}get-earning`);
            setEarnings(response.data);
            // console.log('get Earnings ', response.data);
        } catch (error) {
            if (error.response) {
                setError(error.response.data.message);
            } else {
                setError("An error occurred while making the get request.")
            }
        }
    }
    const earningsDataMapping = (earningsData) => {
        return earningsData.map(e => ({
            amount: e.amount,
            trip: e.trip,
            date: formatDate(e.date),
            category: e.category,
            distance: Math.abs(e.endingMi - e.startingMi),
        }))
    }
    const getMappedEarningsData = async () => {
        const mappedData = earningsDataMapping(earnings);
        console.log('mappedData in Global: ', mappedData);
        return mappedData;
    }
    const aggregateEarningsData = async () => {
        try{
            const response = await axios.get(`${BASE_URL}aggregateData`)
            setAggregatedData(response.data)
            // console.log('response.data: ', response.data);
            // getEarnings()
        }
        catch(error){
            console.error('Error fetching aggregated data:', error);
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
    const addExpense = async (expense) => {
        try{
            const response = await axios.post(`${BASE_URL}add-expense`, expense)
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
            const response = await axios.get(`${BASE_URL}get-expense`)
            setExpense(response.data)
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
            getExpense()
        }
        catch (error){
            if (error.response) {
                setError(error.response.data.message);
            } else {
                setError("An error occurred while making the delete request.")
            }
        }
    }
    const getWeeklyStats = (thisWeek) => {
        let income, trips, dailyDist, weeklyDist, compensation = 0;
        let dateString = '';
        earnings.forEach((e) => {
            dateString = e.date;
            const dateObject = new Date(dateString);
            const weekNumber = getWeekNumber(dateObject);
            if (weekNumber === thisWeek){
                income += e.amount
                trips += e.amount
                dailyDist += Math.abs(e.endingMi - e.startingMi);
                weeklyDist += dailyDist
            }
            compensation = (income*0.655).toFixed(2);
        })
        const weeklyStats = {
            earnings: income,
            trips: trips,
            weeklyDistance: weeklyDist,
            compensation: compensation
        }
        return weeklyStats;
    }
    const getTotalFuel = () =>{
        let totalFuel = 0;
        expense.forEach((exp) => {
            if (exp.category === 'fuel')
            totalFuel += exp.amount
        })
        return totalFuel.toFixed(2);
    }
    const getWeeklyFuel = (thisWeek) =>{
        let weeklyFuel = 0;
        let dateString = '';
        expense.forEach((exp) => {
            dateString = exp.date;
            const dateObject = new Date(dateString);
            const weekNumber = getWeekNumber(dateObject);
            if (weekNumber === thisWeek && exp.category === 'fuel'){
                weeklyFuel += exp.amount
            }
        })
        return weeklyFuel.toFixed(2);
    }
    
    return (
        <GlobalContext.Provider value ={{
            getCurrentDateString,
            addEarnings,
            getEarnings,
            earningsDataMapping,
            getMappedEarningsData,
            earnings,  
            expense,
            aggregatedData,
            aggregateEarningsData,
            addExpense,
            getExpense,
            deleteExpense,
            getWeekNumber,
            deleteEarnings,
            getTotalFuel,
            getWeeklyFuel
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}