import { useContext } from "react"
import { UserContext } from "../../../providers/UserProvider"

export const UserIconWithName = (props) => {
  const { image, name } = props
  const { userInfo } = useContext(UserContext)
  const isAdmin = !!userInfo?.isAdmin
  return (
    <div className="user-icon-with-name-container">
      <img
        className="user-icon"
        height={160}
        width={160}
        alt={name}
        src={image}
      />
      <p className="user-name">{name}</p>
      {isAdmin && <span className="edit-link">edit</span>}
    </div>
  )
}