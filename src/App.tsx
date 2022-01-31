import { useEffect, useState } from "react"
import { AuthContext } from "./context"
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./components/AppRouter"

function App() {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true)
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
