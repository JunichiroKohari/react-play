import { FC } from "react"
import { Link } from "react-router-dom"

export const Page404: FC = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <Link to="/">TOPに戻る</Link>
    </div>
  )
}