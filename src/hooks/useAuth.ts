import { useLoginUser } from './useLoginUser';
import axios from "axios"
import { useCallback, useState } from "react"
import { User } from "../types/api/user"
import { useHistory } from "react-router-dom"
import { useMessage } from "./useMessage"

export const useAuth = () => {
  const history = useHistory()
  const { showMessage } = useMessage()
  const { setLoginUser } = useLoginUser()

  const [loading, setLoading] = useState(false)
  const login = useCallback((id: string) => {
    setLoading(true)
    axios.get<User>(`https://jsonplaceholder.typicode.com/users?id=${id}`)
      .then((res) => {
        if (res.data) {
          const isAdmin = res.data[0].id === 10
          setLoginUser({ ...res.data[0], isAdmin})
          showMessage({ title: "ログインしました。", status: "success" })
          history.push("/home")
        } else {
          showMessage({ title: "ユーザーが見つかりません。", status: "error" })
          setLoading(false)
        }
      })
      .catch(() => showMessage({ title: "ログインできません。", status: "error" }))
      .finally(() => setLoading(false))
  }, [history, showMessage])
  return { login, loading }
}