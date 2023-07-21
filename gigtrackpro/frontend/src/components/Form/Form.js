import React, { useState } from "react";
import styled from 'styled-components';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../context/Global";

function Form ({ toggleModal }) {
    
    const {addEarnings, getEarnings} = useGlobalContext()
    const [inputState, setInputState] = useState({
        amount: '',
        trip: '',
        date: '',
        category: '',
        description: '',
        startingMi: '',
        endingMi: ''
    })
    const { amount, trip, date, category, description, startingMi, endingMi } = inputState; 

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        addEarnings(inputState)
        toggleModal()
        getEarnings()
    }
    return (
        <FormStyled onSubmit={handleSubmit}>
            <div className="input-control">
                <input
                    className={'input-highlight'}
                    autoComplete="off"
                    type="text"
                    value={amount}
                    name={'amount'}
                    placeholder="Earnings"
                    onChange={handleInput('amount')}
                />
            </div>
            <div className="input-control">
                <input
                    className={'input-highlight'}
                    autoComplete="off"
                    type="text"
                    value={trip}
                    name={'trip'}
                    placeholder="Trips Completed"
                    onChange={handleInput('trip')}
                />
            </div>
            <div className="input-control">
                <input
                    className={'input-highlight'}
                    autoComplete="off"
                    type="text"
                    value={startingMi}
                    name={'startingMi'}
                    placeholder="Starting mi"
                    onChange={handleInput('startingMi')}
                />
            </div>
            <div className="input-control">
                <input
                    className={'input-highlight'}
                    autoComplete="off"
                    type="text"
                    value={endingMi}
                    name={'endingMi'}
                    placeholder="Ending mi"
                    onChange={handleInput('endingMi')}
                />
            </div>
            <div className="input-control">
                <DatePicker
                    className={'input-highlight'}
                    autoComplete="off"
                    id='date'
                    placeholderText="Enter Trip Date"
                    selected={date}
                    dateFormat="MM/dd/yyyy"
                    onChange={(date) => {
                        setInputState({...inputState, date: date})
                    }}
                />
            </div>
            {/* <h3 className="box-title-app">App</h3> */}
            <div className="select-input-control">
                <select required value = {category} name="category" id="category" onChange={handleInput('category')}>
                    <option value="" disabled id="d-select">Select App</option>
                    <option value="Uber Eats" >Uber Eats</option>
                    <option value="Uber Pax" >Uber Passenger</option>
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
        /* font-family: 'Roboto', sans-serif; */
        font-size: 1rem;
        font-family: inherit;
        font-weight: none;
        outline: none;
        border: 1px solid #D0D0D0;
        border-radius: 6px;
        padding: .5rem 1rem;
        background: transparent;
        resize: none;
        &::placeholder{
            font-size: 15px;
            color: #B2B2B2;
        }
    }
    .input-control{
        input{
            width: 100%;
        }
    }
    .input-control input.input-highlight {
        border: 1px solid #D0D0D0;
    }

    .input-control input.input-highlight:focus {
        border-color:  #3FC060;
        box-shadow: 0 0 1px 1px #ABE4BA;
        outline: none;
    }
    select{
        width: 100%;
    }
    #date{
            width: 320px;
    }
    .log-button{
        margin-top: 10px;
        background-color: #3FC060;
        color: white;
        cursor: pointer;
        font-size: 17px;
        font-weight: bold;
        display: grid;
        place-items: center;
        text-align: center;
        border: none;
        /* border: 1px solid #565656; */
        height: 50px;
        width: 100%;
        place-items: center;
        border-radius: 7px;
        text-decoration: none;
        letter-spacing: 2px;
        box-shadow: inset 0 0 0 0 #FF4B38;
    }
    .box-title{
        font-weight: 200;
        margin-bottom: .5rem;
    }
    .box-title-app{
        font-weight: 200;
    }

`;

export default Form;