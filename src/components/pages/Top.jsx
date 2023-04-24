import { useContext } from 'react'
import { SecondaryButton } from '../atoms/button/SecondaryButton'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../providers/UserProvider'
import { useSetRecoilState } from 'recoil'
import { userState } from '../../store/userState'
import axios from 'axios'

export const Top = () => {
  const history = useHistory()
  // const { setUserInfo } = useContext(UserContext)
  const setUserInfo = useSetRecoilState(userState)
  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true })
    history.push("/users")
  }
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false })
    history.push("/users")
  }

  const onClickUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data)
    }).catch((err) => console.error(err))
  }
  const onClickUser1 = () => {
    axios.get("https://jsonplaceholder.typicode.com/users?id=1").then((res) => {
      console.log(res.data)
    }).catch((err) => console.error(err))
  }
  return (
    <div className="page-container">
      <h2>TOP PAGE</h2>
      <SecondaryButton onClick={onClickAdmin}>admin</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>general user</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickUsers}>users</SecondaryButton>
      <SecondaryButton onClick={onClickUser1}>user1</SecondaryButton>
    </div>
  )
}