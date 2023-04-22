import { SecondaryButton } from '../atoms/button/SecondaryButton'
import { useHistory } from 'react-router-dom'

export const Top = () => {
  const history = useHistory()
  const onClickAdmin = () => history.push({ pathname: "/users", state: { isAdmin: true } })
  const onClickGeneral = () => history.push({ pathname: "/users", state: { isAdmin: false } })
  return (
    <div className="page-container">
      <h2>TOP PAGE</h2>
      <SecondaryButton onClick={onClickAdmin}>admin</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>general user</SecondaryButton>
    </div>
  )
}