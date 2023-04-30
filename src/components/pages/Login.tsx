import {
  Box,
  Divider,
  Flex,
  Input,
  Heading,
  Stack
} from '@chakra-ui/react'
import { memo, FC, useState, ChangeEvent } from 'react'
import { PrimaryButton } from '../atoms/button/PrimaryButton'
import { useAuth } from '../../hooks/useAuth'

export const Login: FC = memo(() => {
  const { login, loading } = useAuth()
  const [userId, setUserId] = useState("")
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value)
  const onClickLogin = () => login(userId)

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} textAlign="center">
        <Heading as="h1">ユーザー管理アプリ</Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input placeholder="ユーザーID" value={userId} onChange={onChangeUserId}/>
          <PrimaryButton
            onClick={onClickLogin}
            disabled={userId === ""}
            loading={loading}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  )
})