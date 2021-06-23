import './App.css';
import {ThemeProvider} from 'styled-components'

import Cards from './components/Cards/Cards';
import Viewer from './components/Viewer/Viewer';

export const theme = {
  basicColor: "#707070",
  firstColor: "#ff6458",
  secondColor: "#16a7cd"
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Viewer />
        <Cards />
      </div>
    </ThemeProvider>
  );
}

export default App;
