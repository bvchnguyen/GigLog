import React, { useState } from "react";
import styled from 'styled-components';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../context/Global";


function Form () {
    
    const {addEarnings} = useGlobalContext()

    const [inputState, setInputState] = useState({
        amount: '',
        trip: '',
        date: '',
        category: '',
        description: '',
    })
    
    const { amount, trip, date, category, description } = inputState; 

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        addEarnings(inputState)
    }

    return (
        <FormStyled onSubmit={handleSubmit}>
            <div className="input-control">
                <h3>Earnings</h3>
                <input
                    autoComplete="off"
                    type="text"
                    value={amount}
                    name={'amount'}
                    placeholder="$123.45"
                    onChange={handleInput('amount')}
                />
            </div>
            <div className="input-control">
                <h3>Completed Trip</h3>
                <input
                    autoComplete="off"
                    type="text"
                    value={trip}
                    name={'trip'}
                    placeholder="Trips Completed"
                    onChange={handleInput('trip')}
                />
            </div>
            <div className="input-control">
                <h3>Date</h3>
                <DatePicker
                    autoComplete="off"
                    id='date'
                    placeholderText="Enter A Date"
                    selected={date}
                    dateFormat="MM/dd/yyyy"
                    onChange={(date) => {
                        setInputState({...inputState, date: date})
                    }}
                />
            </div>
            <h3>App</h3>
            <div className="select input-control">
                <select required value = {category} name="category" id="category" onChange={handleInput('category')}>
                    <option value="" disabled >Select App</option>
                    <option value="Uber Eats" >Uber Eats</option>
                    <option value="DoorDash"  >DoorDash</option>
                    <option value="Grubhub"   >GrubHub</option>
                    <option value="InstaCart" >InstaCart</option>
                </select>
            </div>
            <div className="submit-btn">
                <button className="log-button">Log Earnings</button>
            </div>
        </FormStyled>
    )
}

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    input, textarea, select{
        height: 40px;
        font-family: 'Roboto', sans-serif;
        font-weight: 100;
        outline: none;
        border: 1px solid #565656;
        border-radius: 6px;
        padding: .5rem 1rem;
        background: transparent;
        resize: none;
        &::placeholder{
            color: #ededed;
        }
    }
    .input-control{
        input{
            width: 100%;
        }
    }
    select{
        width: 100%;
    }
    #date{
            width: 100%;
    }
    .log-button{
        background-color: #3FC060;
        color: white;
        cursor: pointer;
        font-size: 15px;
        display: grid;
        place-items: center;
        text-align: center;
        border: none;
        /* border: 1px solid #565656; */
        height: 50px;
        width: 100%;
        place-items: center;
        border-radius: 10px;
        text-decoration: none;
        letter-spacing: 2px;
        box-shadow: inset 0 0 0 0 #FF4B38;
        transition: 0.5s ease-out;
}

`;

export default Form;