import './App.css';
import { useState, useCallback, useMemo } from 'react'
import { ChildArea } from './ChildArea';
import { InlineStyle } from './components/InlineStyle';

function App() {
  return (
    <div className="App">
      <InlineStyle />
    </div>
  );
}

export default App;
