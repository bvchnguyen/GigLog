import React, { useContext, useState } from "react"
import axios from "axios"

const BASE_URL = 'http://localhost:3000/api/v1/';

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {
    
    const [earnings, setEarnings] = useState([]);
    const [expense, setExpense] = useState([]);
    const [aggregatedData, setAggregatedData] = useState(null);
    const [error, setError] = useState([null]);
    
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
    const aggregateEarningsData = async () => {
        try{
            const response = await axios.get(`${BASE_URL}aggregateData`)
            setAggregatedData(response.data)
        }
        catch(error){
            console.error('Error fetching aggregated data:', error);
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