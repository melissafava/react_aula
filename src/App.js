import './App.css';
import Header from './componentes/Header';
import styled from 'styled-components';
import Pesquisa from './componentes/Pesquisa';
import UltimosLancamentos from './componentes/UltimosLancamentos';

//Container que guarda estilos (styled components)
const AppContainer = styled.div`
    width: 100vw;
    height: 100vw;
    background-image: linear-gradient(90deg, #002f52 35%, #326589);

`

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default App
