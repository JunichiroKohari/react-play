import { Button, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import theme from './theme/theme';
import './App.css';
import { Router } from './router/Router';
import { Parent } from './components/ImperativeHandleText';

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <Parent />
      </ChakraProvider>
    </div>
  );
}

export default App;
