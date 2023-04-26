import { Router } from './router/Router';
import { UserProvider } from './providers/UserProvider';
import './App.css';
import { RecoilRoot } from 'recoil';
import { Practice1 } from './practices/Practice1';

function App() {
  return (
    <div>
      <Practice1 />
    </div>
  );
}

export default App;
