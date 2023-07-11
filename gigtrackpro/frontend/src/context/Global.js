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
   
    return (
        <GlobalContext.Provider value ={{
            addEarnings
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}