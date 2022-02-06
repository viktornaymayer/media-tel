import React, { FC } from "react"
import UserItem from "../components/UserItem"

type Props = {
  users: {
    id: string
    fio: string
    cityid: string
  }[]
  cities: {
    id: string
    name: string
  }[]
}

const UserList: FC<Props> = ({ users, cities }) => {
  return (
    <div>
      {users.map((user) => {
        let city = cities.filter((city) => city.id === user.cityid);
        return <UserItem user={user} city={city[0].name} key={user.id} />
      })}
    </div>
  )
}

export default UserList
