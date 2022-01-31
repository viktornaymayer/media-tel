import AddUserPage from "../pages/AddUserPage"
import AuthPage from "../pages/AuthPage"
import UserPage from "../pages/UserPage"
import UsersPage from "../pages/UsersPage"

export const privateRoutes = [
  { path: "/users", element: <UsersPage/> },
  { path: "/add_user", element: <AddUserPage/> },
  { path: "/users/:id", element: <UserPage/> },
]

export const publicRoutes = [
  { path: "/auth", element: <AuthPage/> }
]
