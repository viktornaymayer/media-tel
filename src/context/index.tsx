import { createContext } from "react"

type setIsAuth = (value: any) => void
interface AuthContextInterface {
  isAuth: boolean
  setIsAuth: setIsAuth
}

export const AuthContext = createContext<AuthContextInterface | null>(null)
