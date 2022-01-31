import { FC, useContext, FormEvent } from "react"
import { AuthContext } from "../context"

const AuthPage: FC = () => {
  const auth = useContext(AuthContext)

  const authFn = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    localStorage.setItem("auth", "true")
    auth?.setIsAuth(true)
  }

  return (
    <div className="auth_container">
      <form onSubmit={authFn}>
        <h3>Вход</h3>
        <input type="text" placeholder="Логин" />
        <input type="password" placeholder="Пароль" />
        <button>Войти</button>
      </form>
    </div>
  )
}

export default AuthPage
