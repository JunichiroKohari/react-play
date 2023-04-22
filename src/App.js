import { Router } from './router/Router';
import { UserProvider } from './providers/UserProvider';
import './App.css';

function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

export default App;
