import React, { FC, useState } from "react"
import UserModal from "../components/UserModal"
import UserList from "../components/UserList"
import UserService from "../API/UserService"
import CityService from "../API/CityService"
import { Link } from "react-router-dom"

type usersProps = {
  id: string;
  fio: string;
  cityId: string;
}[]
type cityProps = {
  id: string;
  name: string;
}[]
type userProps = {
  id: string;
  fio: string;
  cityId: string | undefined;
}

const usersResponse: usersProps = UserService.getUsers()
const citiesResponse: cityProps = CityService.getCities()
const usersInit = usersResponse.map((user: userProps) => {
  user.cityId = citiesResponse.find(city => city.id === user.cityId)?.name
  return user
})

const UsersPage: FC = () => {

  const [users, setUsers] =  useState(usersInit)

  const [modal, setModal] = useState(false)
  const [userForRemove, setUserForRemove] = useState<userProps>(
    {id: '', fio: '', cityId: ''})

  return (
    <>
      <Link className="btn btn-success add-user-btn" to="/add_user">Add User</Link>
      <UserModal
        visible={modal}
        setVisible={setModal}
        userForRemove={userForRemove}
        title="Удаление пользователя"
      />
      <UserList
        users={users}
        setUserForRemove={setUserForRemove}
        setVisible={setModal}
      />
    </>
  )
}

export default UsersPage
