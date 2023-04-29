import { Router } from './router/Router';
import { User } from './types/user';
import './App.css';
import { RecoilRoot } from 'recoil';
import { Practice1 } from './practices/Practice1';
import { Text } from './components/atoms/text/Text';
import axios from 'axios';
import { useState } from 'react';
import { Todo } from './Todo';
import { TodoType } from './types/todo';
import { UserProfile } from './UserProfile';

const user: User = {
  name: 'kohari',
  hobbies: ['映画', '散歩']
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
      <UserProfile user={user} />
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchData}>fetch data</button>
      {todos.map(todo => {
        return <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      })}
    </div>
  );
}

export default App;
