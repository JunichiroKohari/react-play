import { Router } from './router/Router';
import { UserProvider } from './providers/UserProvider';
import './App.css';
import { RecoilRoot } from 'recoil';
import { Practice1 } from './practices/Practice1';
import axios from 'axios';
import { useState } from 'react';
import { Todo } from './Todo';

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([])
  const onClickFetchData = () => {
    axios.get<Array<TodoType>>('https://jsonplaceholder.typicode.com/todos').then(res => {
      setTodos(res.data)
    })
  }
  return (
    <div className="App">
      <button onClick={onClickFetchData}>fetch data</button>
      {todos.map(todo => {
        return <Todo title={todo.title} userId={todo.userId} completed={todo.completed} />
      })}
    </div>
  );
}

export default App;
