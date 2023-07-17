import React, { useContext, useState } from "react"
import axios from "axios"
import { earning } from "../utils/Icons";

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

    const totalTrips = () =>{
        let totalTripsMade = 0;
        earnings.forEach((earning) => {
            totalTripsMade += earning.trip
        })
        return totalTripsMade;
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
    console.log('Total Income: ', totalEarnings())
    console.log('Total Trips: ', totalTrips())

    return (
        <GlobalContext.Provider value ={{
            addEarnings,
            getEarnings,
            earnings,
            deleteEarnings,
            totalEarnings,
            totalTrips,
            totalDistance
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}