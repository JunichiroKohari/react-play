import {
  Center,
  Spinner,
  Wrap,
  WrapItem,
  useDisclosure
} from '@chakra-ui/react'
import { memo, FC, useEffect, useCallback } from 'react'
import { UserCard } from '../organisms/user/UserCard'
import { UserDetailModal } from '../organisms/user/UserDetailModal'
import { useAllUsers } from '../../hooks/useAllUsers'
import { useSelectUser } from '../../hooks/useSelectUser'
import { useLoginUser } from '../../hooks/useLoginUser'

export const UserManagement: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { getUsers, users, loading } = useAllUsers()
  const { onSelectUser, selectedUser } = useSelectUser()
  const { loginUser } = useLoginUser()

  useEffect(() => getUsers(), [])
  const onClickUser = useCallback((id: number) => {
    onSelectUser({ id, users, onOpen })
  }, [users, onOpen])

  return (
    <>
      {loading ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => {
            return (
              <WrapItem key={user.id} mx="auto">
                <UserCard
                  id={user.id}
                  imageUrl="https://source.unsplash.com/random"
                  userName={user.username}
                  fullName={user.name}
                  onClick={onClickUser}
                />
              </WrapItem>
            )
          })}
        </Wrap>
      )}
      <UserDetailModal
        isOpen={isOpen}
        onClose={onClose}
        user={selectedUser}
        isAdmin={loginUser?.isAdmin}
      />
    </>
  )
})