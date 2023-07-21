import React, { useContext, useState } from "react"
import axios from "axios"

const BASE_URL = 'http://localhost:3000/api/v1/';

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {
    
    const [earnings, setEarnings] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState([null])
    
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

    const deleteEarnings = async (id) =>{
        try{
            const response = await axios.delete(`${BASE_URL}delete-earning/${id}`)
            /* Render after adding a trip */
            getEarnings()
        }
        catch (error){
            if (error.response) {
                setError(error.response.data.message);
            } else {
                setError("An error occurred while making the delete request.")
            }
        }
    }
    const totalEarnings = () => {
        let totalEarningsAmount = 0;
        earnings.forEach((earning) => {
            totalEarningsAmount += earning.amount
        })
        return totalEarningsAmount.toFixed(2);
    }

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

    const getWeekNumber = (date) => {
        const weekStart = new Date(date);
        weekStart.setDate(weekStart.getDate() - (weekStart.getDay() + 6) % 7 + 1);
        const firstThursday = new Date(weekStart.getFullYear(), 0, 4);
        const weekNumber = Math.ceil(((weekStart - firstThursday) / 86400000 + 1) / 7);
        return weekNumber;
    }

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

    const totalTrips = () =>{
        let totalTripsMade = 0;
        earnings.forEach((earning) => {
            totalTripsMade += earning.trip
        })
        return totalTripsMade;
    }

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

    const totalDistance = () =>{
        let eachDistance = 0;
        let totalDistance = 0;
        earnings.forEach((earning) => {
            eachDistance = earning.endingMi - earning.startingMi
            totalDistance += eachDistance
        })
        return totalDistance;
    }
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
    const getAverageTripRatio = () => {
        return (totalEarnings() / totalDistance()).toFixed(1);
    }
    // console.log('Total Income: ', totalEarnings())
    // console.log('Total Trips: ', totalTrips())

    return (
        <GlobalContext.Provider value ={{
            addEarnings,
            getEarnings,
            earnings,
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
            getAverageTripRatio
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}