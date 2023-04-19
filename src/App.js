import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';
import { DefaultLayout } from './components/templates/DefaultLayout';

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
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
