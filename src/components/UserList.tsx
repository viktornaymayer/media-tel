import React, { FC } from "react"
import UserItem from "../components/UserItem"

type Props = {
  users: {
    id: string
    fio: string
    cityId: string | undefined
  }[]
  setUserForRemove: React.Dispatch<React.SetStateAction<
    {
      id: string
      fio: string
      cityId: string | undefined
    }>>
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const UserList: FC<Props> = ({ users, setUserForRemove, setVisible }) => {
  return (
    <div>
      {users.map((user) => {
        return (
          <UserItem
            user={user}
            key={user.id}
            setUserForRemove={setUserForRemove}
            setVisible={setVisible}
          />
        )
      })}
    </div>
  )
}

export default UserList
