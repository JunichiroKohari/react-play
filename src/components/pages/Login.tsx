import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  Heading,
  Stack
} from '@chakra-ui/react'
import { memo, FC } from 'react'

export const Login: FC = memo(() => {
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} textAlign="center">
        <Heading as="h1">ユーザー管理アプリ</Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input placeholder="ユーザーID" />
          <Button
            bg="teal.400"
            color="white"
            _hover={{ opacity: 0.8 }}
          >
            ログイン
          </Button>
        </Stack>
      </Box>
    </Flex>
  )
})