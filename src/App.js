import './App.css';
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  console.log('rerendering')
  const onClickCountUp = () => setCount(count+1)
  return (
    <div className="App">
      <h1>Hello</h1>
      <p>{count}</p>
      <button onClick={onClickCountUp}>count up</button>
    </div>
  );
}

export default App;
