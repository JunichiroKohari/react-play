import { Router } from './router/Router';
import { UserProfile } from './types/user';
import './App.css';
import { useAllUsers } from './hooks/useAllUsers';
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
  const { getUsers, userProfiles, loading, error } = useAllUsers()
  const onClickFetchUsers = () => getUsers()
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
