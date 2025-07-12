import Header from '../componentes/Header/index.js';
import styled from 'styled-components';
import Search from '../componentes/Search/index.js';
import UltimosLancamentos from '../componentes/UltimosLancamentos/index.js';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
    
`

function Home() {
  return (
    <AppContainer>
      <Search/>
      <UltimosLancamentos/>
    </AppContainer>
  );
}

export default Home;
