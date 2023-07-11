import React, { useState } from 'react'
import styled from 'styled-components'
import { Mainlayout } from './styles/Layouts'
import Navigation from './components/Navigation/Navigation';
import Dashboard from './components/Dashboard/Dashboard';
import Statistics from './components/Statistics/Statistics';
import Statement from './components/Statement/Statement';
import Earnings from './components/Earnings/Earnings';
import { useGlobalContext } from './context/Global';
import EarningsModal from './components/Modal/EarningsModal';

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

    return (
    <AppStyled className="App">
        <Mainlayout>
            <Navigation active={ active } setActive={ setActive }/>
            <main>
                {displayData()}
            </main>
        </Mainlayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
    height: 100vh;
    position: relative;
    main{
        flex: 1; 
        background-color: white;
        border-radius: 20px;
        overflow: auto;
        overflow-x: hidden;
        &::-webkit-scrollbar{
            width: 0;
        }
    }
`;

export default App;
