import { SearchInput } from '../molecules/SearchInput'
import { UserCard } from '../organisms/user/UserCard'

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: 'ほげ' + val,
    image: 'https://source.unsplash.com/eoqnr8ikwFE',
    email: 'hoge@example.com',
    phone: '0120-333-906',
    company: {
      name: 'テスト株式会社',
    },
    website: 'https://google.com'
  }
})

export const Users = () => {
  return (
    <div className="page-container">
      <h2>USERS PAGE</h2>
      <SearchInput />
      <div className="user-area">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}