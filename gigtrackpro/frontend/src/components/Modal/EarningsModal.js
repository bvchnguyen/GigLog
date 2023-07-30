import React, { useState, useEffect } from "react";
import Form from "../Form/Form";
import styled from 'styled-components';
import { x } from '../../utils/Icons';

function EarningsModal (){
    const [modal, setModal] = useState(false);
    
    const toggleModal = () => {
        setModal(!modal)
    }
    useEffect(() => {
        if (modal) {
          document.body.classList.add('active-modl');
        } 
        else {
          document.body.classList.remove('active-modl');
        }
    }, [modal]);

    return (
        <EarningsModalStyled>
            <button onClick={toggleModal} className="btn-modal">
                <h3>Log trip</h3>
            </button>
            {modal && (
                <div className="modal">
                    <div className="overlay" onClick={toggleModal}></div>
                    <div className="modal-content">
                        <h1 className="modal-heading">Log Earnings</h1>
                        <Form toggleModal={toggleModal}/>
                        <button 
                            className="close-modal" 
                            onClick={toggleModal}
                        >{ x }
                        </button>
                    </div>
                </div>
            )}
        </EarningsModalStyled>
    )
}

const EarningsModalStyled = styled.nav`

    .modal-heading {
        color: #2c2c2c;
        text-align: center;
        margin-top: 0;
        margin-bottom: 1rem;
    }
    body.active-modal {
        overflow-y: hidden;
    }

    .btn-modal {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: #3FC060;
        color: white;
        cursor: pointer;
        place-items: center;
        text-align: center;
        border: none;
        height: 30px;
        width: 100px;
        border-radius: 7px;
        letter-spacing: 2px;
        h3{
            margin-left: 5px;
            font-size: 12px;
            font-weight: 100;
        } 
    }
    .modal{
        z-index: 9999;
    }
    .modal, .overlay {
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: fixed;
    }

    .overlay {
        background: rgba(49,49,49,0.8);
    }
    .modal-content {
        position: absolute;
        top: 40%;
        left: 50%;
        width: 22rem;
        transform: translate(-50%, -50%);
        line-height: 1.4;
        background: #f1f1f1;
        padding: 1rem 1rem;
        border-radius: 10px;
        max-width: 600px;
        min-width: 300px;
    }

    .close-modal {
        cursor: pointer;
        background-color: none;
        color: #7D7D7D;
        font-size: 15px;
        border: none;
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 5px 7px;
    }
`;

export default EarningsModal;