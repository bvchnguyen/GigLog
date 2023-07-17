import React, { useState } from 'react'
import styled from 'styled-components'
import { Mainlayout } from './styles/Layouts'
import Navigation from './components/Navigation/Navigation';
import Dashboard from './components/Dashboard/Dashboard';
import Statistics from './components/Statistics/Statistics';
import Statement from './components/Statement/Statement';
import Earnings from './components/Earnings/Earnings';
import EarningsModal from './components/Modal/EarningsModal';
import { useGlobalContext } from './context/Global';
import RenderItems from './components/EarningsItems/RenderItems';

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
                return <h2>Dashboard</h2>
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
                <div className='hellotest'>
                    {displayNavSelect()}
                </div>
                <div>
                    {displayData()}
                </div>
            </main>
            <RenderItems />
        </Mainlayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
    height: 100vh;
    /* position: relative; */
    .hellotest{
        background-color: #f8f7f0;
        height: 10vh;
        padding: 2rem;
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
        /* background-color: white; */
        background-color: white;
        /* border-radius: 20px; */
        overflow: hidden;
        overflow-x: hidden;
        &::-webkit-scrollbar{
            width: 0;
        }
    }
`;

export default App;
