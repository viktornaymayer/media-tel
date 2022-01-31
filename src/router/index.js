import AddUserPage from "../pages/AddUserPage"
import AuthPage from "../pages/AuthPage"
import UserPage from "../pages/UserPage"
import UsersPage from "../pages/UsersPage"

export const appRoutes = [
  { path: "/auth", element: <AuthPage/> },
  { path: "/users", element: <UsersPage/> },
  { path: "/add_user", element: <AddUserPage/> },
  { path: "/users/:id", element: <UserPage/> },
]