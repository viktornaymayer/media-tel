import React, { FC } from "react"
import UserService from "../API/UserService"

type Props = {
  title: string
  visible: boolean
  userForRemove: {
    id: string
    fio: string
    cityId: string | undefined
  }
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const UserModal: FC<Props> = ({ title, visible, userForRemove, setVisible }) => {
  return (
    <div
      className={visible ? "modal active" : "modal"}
      onClick={() => setVisible(false)}
    >
      <div className="modalData" onClick={(e) => e.stopPropagation()}>
        <h2 style={{ textAlign: "center" }}>
          {title}
          <br/><br/>
          {userForRemove.fio} ({userForRemove.cityId})
        </h2>
        <div className="modal-btns">
          <button className="btn-danger" onClick={() => {
            alert(`Send the request for delete user with id:\n${userForRemove.id}`)
            UserService.delUser(userForRemove.id);
            setVisible(false)
          }}>
            Delete
          </button>
          <button className="btn-secondary" onClick={() => setVisible(false)}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default UserModal
