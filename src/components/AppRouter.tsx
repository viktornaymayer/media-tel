import { useContext } from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { AuthContext } from "../context"
import { publicRoutes, privateRoutes } from "../router"
import NavBar from "./NavBar"

const AppRouter = () => {
  const auth = useContext(AuthContext)
  return auth?.isAuth ? (
    <div>
      <NavBar />
      <Routes>
        {privateRoutes.map((route) => (
          <Route key={route.path} element={route.element} path={route.path} />
        ))}
        <Route path="*" element={<Navigate to="/users" />} />
      </Routes>
    </div>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} element={route.element} path={route.path} />
      ))}
      <Route path="*" element={<Navigate to="/auth" />} />
    </Routes>
  )
}

export default AppRouter
