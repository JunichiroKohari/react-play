import { FC } from 'react'
import { UserProfile as User } from './types/user'

type Props = {
  user: User;
}

export const UserProfile: FC<Props> = (props) => {
  const { user } = props
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      <dd>{user.hobbies?.join(' / ') ?? 'なし'}</dd>
    </dl>
  )
}