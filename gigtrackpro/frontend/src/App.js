import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import { Mainlayout } from './styles/Layouts'
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Account from './pages/Account';
import Dashboard from './components/Dashboard/Dashboard';
import Earnings from './components/Earnings/Earnings';
import Statistics from './components/Statistics/Statistics';

axios.defaults.baseURL = 'http://localhost:3000/';
axios.withCredentials = true;

function App() {
    return (
      <Router>
        <AppStyled className="App">
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/account/*" element={<Account />}>
                    {/* <Route path='dashboard' element={<Dashboard />} />
                    <Route path='overview' element={<Earnings /> } />
                    <Route path='analytics' element={<Statistics />} /> */}
                </Route>
            </Routes>
        </AppStyled>
      </Router>
    );
  }
const AppStyled = styled.div`
    height: 100vh;
    main{
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
