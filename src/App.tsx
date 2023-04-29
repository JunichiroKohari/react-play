import { Router } from './router/Router';
import { UserProfile } from './types/user';
import './App.css';
import { RecoilRoot } from 'recoil';
import { Practice1 } from './practices/Practice1';
import { Text } from './components/atoms/text/Text';
import axios from 'axios';
import { useState } from 'react';
import { Todo } from './Todo';
import { User } from './types/api/user';
import { UserCard } from './components/organisms/user/UserCard';

const user: UserProfile = {
  id: 1,
  name: 'kohari',
  email: 'hoge@gmail.com',
  address: '大阪府',
  hobbies: ['映画', '散歩']
}

function App() {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const onClickFetchUsers = () => {
    setLoading(true)
    axios.get<Array<User>>('https://jsonplaceholder.typicode.com/users').then(res => {
      const data = res.data.map((user) => {
        return {
          id: user.id,
          name: `${user.name}（${user.username}）`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`
        }
      })
      setUserProfiles(data)
    }).catch(() => {
      setError(true)
    }).finally(() => {
      setLoading(false)
    })
  }
  return (
    <div className="App">
      <UserCard user={user} />
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchUsers}>fetch users</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データ取得に失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}

export default App;
