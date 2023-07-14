import React, { useContext, useState } from "react"
import axios from "axios"

const BASE_URL = 'http://localhost:3000/api/v1/';

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {
    
    const [earnings, setEarnings] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState([null])
    
    const addEarnings = async (earnings) => {
        const response = await axios.post(`${BASE_URL}add-earning`, earnings)
            .catch((err) =>{
                setError(err.response.data.message)
            })
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
                setError("An error occurred while making the request.")
            }
        }
    }
    return (
        <GlobalContext.Provider value ={{
            addEarnings,
            getEarnings,
            earnings
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}