import { memo, FC, useState, useEffect, ChangeEvent } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
} from '@chakra-ui/react'
import { User } from '../../../types/api/user'
import { PrimaryButton } from '../../atoms/button/PrimaryButton';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
  isAdmin?: boolean;
}

export const UserDetailModal: FC<Props> = memo((props) => {
  const { isOpen, onClose, user, isAdmin= false } = props
  const [username, setUsername] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  useEffect(() => {
    setUsername(user?.username ?? '')
    setName(user?.name ?? '')
    setEmail(user?.email ?? '')
    setPhone(user?.phone ?? '')
  }, [user])

  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)
  const onClickUpdate = () => alert('admin')

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset='slideInBottom'
    >
      <ModalOverlay />
      <ModalContent pb={2}>
        <ModalHeader>ユーザ詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input value={username} isReadOnly={!isAdmin} onChange={onChangeUserName} />
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input value={name} isReadOnly={!isAdmin} onChange={onChangeName} />
            </FormControl>
            <FormControl>
              <FormLabel>MAIL</FormLabel>
              <Input value={email} isReadOnly={!isAdmin} onChange={onChangeEmail} />
            </FormControl>
            <FormControl>
              <FormLabel>TEL</FormLabel>
              <Input value={phone} isReadOnly={!isAdmin} onChange={onChangePhone} />
            </FormControl>
          </Stack>
        </ModalBody>
        {isAdmin && (
          <ModalFooter>
            <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  )
})