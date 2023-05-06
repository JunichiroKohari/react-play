import { Button, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import theme from './theme/theme';
import './App.css';
import { Counter } from './components/atoms/Counter';
import { Router } from './router/Router';

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <Counter initialValue={1} />
      </ChakraProvider>
    </div>
  );
}

export default App;
