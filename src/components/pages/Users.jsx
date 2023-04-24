import { UserContext } from '../../providers/UserProvider'
import { SecondaryButton } from '../atoms/button/SecondaryButton'
import { SearchInput } from '../molecules/SearchInput'
import { UserCard } from '../organisms/user/UserCard'
import { useContext } from 'react'

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
  const { userInfo, setUserInfo } = useContext(UserContext)
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin })
  return (
    <div className="page-container">
      <h2>USERS PAGE</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <div className="user-area">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}