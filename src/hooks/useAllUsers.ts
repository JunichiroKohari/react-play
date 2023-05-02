import axios from 'axios';
import { useCallback, useState } from 'react'
import { useMessage } from './useMessage';
import { User } from '../types/api/user';

// 全ユーザ一覧取得
export const useAllUsers = () => {
  const { showMessage } = useMessage()

  const [users, setUsers] = useState<Array<User>>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const getUsers = useCallback(() => {
    setLoading(true)
    axios.get<Array<User>>('https://jsonplaceholder.typicode.com/users').then(res => {
      setUsers(res.data)
    }).catch(() => {
      showMessage({ title: "ユーザ取得に失敗しました。", status: "error" })
      setError(true)
    }).finally(() => {
      setLoading(false)
    })
  }, [])

  return { getUsers, users, loading }
}