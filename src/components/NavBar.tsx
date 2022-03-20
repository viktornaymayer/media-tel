import React, { FC, useContext } from "react"
import { AuthContext } from "../context"

const NavBar: FC = () => {
  const auth = useContext(AuthContext)
  const logOut = (): void => {
    auth?.setIsAuth(false)
    localStorage.removeItem("auth")
  }
  return (
    <nav>
      <button onClick={logOut}>LogOut</button>
    </nav>
  )
}

export default NavBar
