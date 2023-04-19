import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header className="header">
      <Link className="header-link" to="/">HOME</Link>
      <Link className="header-link" to="/users">USERS</Link>
    </header>
  )
}