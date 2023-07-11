import React, { useState } from "react";
import Form from "../Form/Form";
import styled from 'styled-components';

function EarningsModal (){
    const [modal, setModal] = useState(false);
    
    const toggleModal = () => {
        setModal(!modal)
    }
    
    if(modal){
        document.body.classList.add('active-modl')
    }
    else{
        document.body.classList.remove('active-modl')
    }

    return (
        <EarningsModalStyled >
            <button
                onClick={toggleModal}
                className="btn-modal"
            >
                Log trip
            </button>
            {modal && (
                <div className="modal">
                    <div className="overlay" onClick={toggleModal}></div>
                    <div className="modal-content">
                        <h2>Log Earnings</h2>
                        <Form onClick={toggleModal}/>
                        <button 
                            className="close-modal" 
                            onClick={toggleModal}
                        >Closed
                        </button>
                    </div>
                </div>
            )}
        </EarningsModalStyled>
    )
}

const EarningsModalStyled = styled.nav`
    body.active-modal {
        overflow-y: hidden;
    }

    .btn-modal {
        padding: 10px 20px;
        display: block;
        margin: 100px auto 0;
        font-size: 18px;
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
        transform: translate(-50%, -50%);
        line-height: 1.4;
        background: #f1f1f1;
        padding: 2rem 2rem;
        border-radius: 10px;
        max-width: 600px;
        min-width: 300px;
    }

    .close-modal {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 5px 7px;
    }
`;

export default EarningsModal;