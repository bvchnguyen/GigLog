import React, { Children, useState } from 'react'
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom';
import { Mainlayout } from '../styles/Layouts';
import Navigation from '../components/Navigation/Navigation';
import Dashboard from '../components/Dashboard/Dashboard';
import Earnings from '../components/Earnings/Earnings';
import Statistics from '../components/Statistics/Statistics';

function Account() {

    const [active, setActive] = useState(1);

    return (
    <AccountStyled>
            <div className='nav-content'>
            <Navigation active={ active } setActive={ setActive }/>
            <div className='route-content'>
                <div className='content-header'>
                    <div className='content-title'>
                        <h3>Weekly Overview</h3>
                        <p>Today is August 20, 2023</p>
                    </div> 
                    <div className='user-info'>
                        <h3>Username</h3>
                        <h3>email</h3>
                    </div>
                </div>
                <Routes>
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='overview' element={<Earnings /> } />
                    <Route path='analytics' element={<Statistics />} />
                </Routes>
            </div>
            </div>
        </AccountStyled>
    );
}
const AccountStyled = styled.div`
    height: 100vh;
    width: 100%;
    .nav-content{
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: row;
    }
    &::-webkit-scrollbar{
        width: 0;
    }
    .route-content{
        display: flex;
        flex-direction: column;
        width: 100%;
        .content-header{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            height: 17vh;
            padding: 2rem;
            width: 100%;
            background-color: white;
        }
        .content-title{
            display: flex;
            flex-direction: column;
            font-family: 'inter';
            font-weight: 100;
            gap: 0.5rem;
            h3{
                font-size: 25px;
            }
            p{
                font-size: 15px;
            }
        }
    }
`;

export default Account;
