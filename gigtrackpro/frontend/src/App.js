import React, { useState } from 'react';
import styled from 'styled-components';
import { Mainlayout } from './styles/Layouts';
import { useGlobalContext } from './context/Global';
import Navigation from './components/Navigation/Navigation';
import Dashboard from './components/Dashboard/Dashboard';
import Statistics from './components/Statistics/Statistics';
import Statement from './components/Statement/Statement';
import Earnings from './components/Earnings/Earnings';
import EarningsModal from './components/Modal/EarningsModal';
import RenderItems from './components/EarningsItems/RenderItems';
import  avatar from '/Users/bvch/Documents/GigTrackPro/gigtrackpro/frontend/src/img/avatar.jpg'


function App() {

    const [active, setActive] = useState(1)

    const global = useGlobalContext()
    console.log(global)

    // Function to display data based on selected menu item
    const displayData = () => {
        // Switch to render the component depending on state
        switch(active){
            case 1:
                return <Dashboard />
            case 2: 
                return <Earnings />
            case 3:
                return <Statistics />
            case 4:
                return <Statement />
            default:
                return <Dashboard />
        }
    }

    const displayNavSelect = () => {
        switch(active){
            case 1:
                return <div>
                            <h2>Hello, Bach!</h2>
                            <p>Weekly overview</p> 
                        </div>
            case 2: 
                return <h2>Earnings</h2>
            case 3:
                return <h2>Statistics</h2>
            case 4:
                return <h2>Statement</h2>
            default:
                return <h2>Dashboard</h2>
        }
    }

    return (
    <AppStyled className="App">
        <Mainlayout>
            <Navigation active={ active } setActive={ setActive }/>
            <main>
                <div className='heading'>
                    {displayNavSelect()}
                    <div className='avi-container'>
                        <img  src={avatar} alt ="Avatar"/>
                        <div className="name-info">
                            <h3>Bach Nguyen</h3>
                            <p>Delivering since 2021</p>
                        </div>
                    </div>
                </div>
                <div>
                    {displayData()}
                </div>
            </main>
        </Mainlayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
    height: 100vh;
    .heading{
        background-color: white;
        height: 15vh;
        padding: 2rem;
        border-radius: 25px 0 0 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .avi-container{
            display: flex;
            flex-direction: row;
            gap: 1rem;
            align-items: center;
            img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                object-fit: cover;
            }
    }
    }
    main{
        position: relative;
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100%;
        background-color: #101214;
        overflow: hidden;
        overflow-x: hidden;
        &::-webkit-scrollbar{
            width: 0;
        }
    }
`;

export default App;
