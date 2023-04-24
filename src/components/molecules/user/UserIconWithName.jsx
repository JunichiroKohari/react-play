import { memo, useContext } from "react"
import { UserContext } from "../../../providers/UserProvider"
import { useRecoilValue } from "recoil"
import { userState } from "../../../store/userState"

export const UserIconWithName = memo((props) => {
  const { image, name } = props
  // const { userInfo } = useContext(UserContext)
  const userInfo = useRecoilValue(userState)
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
})