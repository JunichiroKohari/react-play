import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';

const user = {
  name: 'ほげ',
  image: 'https://source.unsplash.com/eoqnr8ikwFE',
  email: 'hoge@example.com',
  phone: '0120-333-906',
  company: {
    name: 'テスト株式会社',
  },
  website: 'https://google.com'
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </div>
    </BrowserRouter>
  );
}

export default App;
