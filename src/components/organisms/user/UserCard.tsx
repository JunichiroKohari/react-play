import { FC, memo } from 'react'
import {
  Box,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'

type Props = {
  id: number;
  userName: string;
  fullName: string;
  imageUrl: string;
  onClick: (id: number) => void;
};

export const UserCard:FC<Props> = memo((props) => {
  const {
    id,
    userName,
    fullName,
    imageUrl,
    onClick,
  } = props

  return (
    <Box
      w="260px"
      h="260px"
      p={4}
      bg="white"
      borderRadius="10px"
      shadow="md"
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={() => onClick(id)}
    >
      <Stack textAlign="center">
        <Image
          borderRadius="full"
          boxSize="160px"
          m="auto"
          src={imageUrl}
          alt="profile image"
        />
        <Text fontSize="lg" fontWeight="bold">{userName}</Text>
        <Text fontSize="sm" color="gray">{fullName}</Text>
      </Stack>
    </Box>
  )
})