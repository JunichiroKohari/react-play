import { Card } from "../../atoms/card/Card"
import { UserIconWithName } from "../../molecules/user/UserIconWithName"

export const UserCard = (props) => {
  const { user, isAdmin } = props
  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} isAdmin={isAdmin} />
      <dl className="profile-dl">
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>WEB</dt>
        <dd>{user.website}</dd>
      </dl>
    </Card>
  )
}