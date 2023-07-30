import React, { useState } from "react";
import styled from 'styled-components';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../context/Global";

function ExpenseForm ({ toggleModal }) {
    
    const {addExpense, getExpense} = useGlobalContext()
    const [inputState, setInputState] = useState({
        amount: '',
        date: '',
        category: '',
    })
    const { amount, date, category } = inputState; 

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        addExpense(inputState)
        getExpense()
        toggleModal()
    }
    return (
        <ExpenseFormStyled onSubmit={handleSubmit}>
            <div className="input-control">
                <input
                    className={'input-highlight'}
                    autoComplete="off"
                    type="text"
                    value={amount}
                    name={'amount'}
                    placeholder="Expense Amount"
                    onChange={handleInput('amount')}
                />
            </div>
            <div className="input-control">
                <DatePicker
                    className={'input-highlight'}
                    autoComplete="off"
                    id='date'
                    placeholderText="Enter Date"
                    selected={date}
                    dateFormat="MM/dd/yyyy"
                    onChange={(date) => {
                        setInputState({...inputState, date: date})
                    }}
                />
            </div>
            <div className="select-input-control">
                <select required value = {category} name="category" id="category" onChange={handleInput('category')}>
                    <option value="" disabled id="d-select">Select Expense</option>
                    <option value="fuel" >Fuel</option>
                    <option value="maintenance" >Maintenance</option>
                    <option value="repairs"  >Repairs</option>
                </select>
            </div>
            <div className="submit-btn">
                <button className="log-button">Log Expense</button>
            </div>
        </ExpenseFormStyled>
    )
}

const ExpenseFormStyled = styled.form`
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

export default ExpenseForm;