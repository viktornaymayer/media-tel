import React, { FC } from "react"
import { Link } from "react-router-dom"

type Props = {
  user: {
    id: string;
    fio: string;
    cityId: string | undefined;
  }
  setUserForRemove: React.Dispatch<React.SetStateAction<
    {
      id: string;
      fio: string;
      cityId: string | undefined;
    }>>
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const UserItem: FC<Props> = ({ user, setUserForRemove, setVisible }) => {
  return (
    <Link className="user-item" to={'/users/' + user.id}>
      <div className="user-data">
        <strong className="user-fio">{user.fio}</strong>
        <span className="user-city">{user.cityId}</span>
      </div>
      <div className="user-btns">
        <button className="btn-primary">Edit</button>
        <button className="btn-danger" onClick={
          (e) => {
            e.preventDefault();
            setVisible(true)
            console.log(user)
            setUserForRemove(user)
          }}>
          Del
        </button>
      </div>
    </Link>
  )
}

export default UserItem
