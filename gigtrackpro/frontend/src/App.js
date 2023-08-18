import React, { useState } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import { Mainlayout } from './styles/Layouts'
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
    return (
      <Router>
        <AppStyled className="App">
          <Mainlayout>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            </Routes>
          </Mainlayout>
        </AppStyled>
      </Router>
    );
  }
const AppStyled = styled.div`
    height: 100vh;
    /* position: relative; */
    .hellotest{
        background-color: white;
        height: 15vh;
        padding: 2rem;
        border-radius: 25px 0 0 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    main{
        position: relative;
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100%;
        background-color: #101214;
        /* overflow-x: hidden; */
        &::-webkit-scrollbar{
            width: 0;
        }
    }
`;

export default App;
