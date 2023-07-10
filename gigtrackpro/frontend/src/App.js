import styled from 'styled-components'
import { Mainlayout } from './styles/Layouts'

function App() {
  return (
    <AppStyled className="App">
        <Mainlayout>   
        </Mainlayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
    height: 100vh;
    position: relative;
`;

export default App;
