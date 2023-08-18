import React from "react";
import styled from 'styled-components';

function register(){
    return(
        <registerStyled>
            <form>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <buton>Register</buton>
            </form>
        </registerStyled>
    )
}

const registerStyled = styled.div`

`;

export default register;