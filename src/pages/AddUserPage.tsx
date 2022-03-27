import { FC, useState, createRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import UserService from "../API/UserService"
import SelectCity from '../components/SelectCity'

const AddUserPage: FC = () => {
  const navigate = useNavigate()

  const userFio = createRef<HTMLInputElement>()
  const [userCity, setUserCity] = useState('')

  function addUser(){
    if (!userFio.current?.value || !userCity){
      alert('Please complete all fields!')
      return
    }

    let newUser = {
      id: uuidv4(),
      fio: userFio.current?.value,
      cityId: userCity
    }
    alert(`
      Send request to add new user.\n
      User info:
      id: ${newUser.id}
      fio: ${newUser.fio}
      cityId: ${newUser.cityId}
    `)
    UserService.addUser(newUser)
    navigate('../')
  }

  return (
    <div className="container add-user-page">
      <h3>ADD NEW USER</h3>
      <input ref={userFio} type="text" placeholder="Enter name"/>
      <SelectCity setUserCity={setUserCity} />
      <Link className="btn btn-secondary" to="../">Cancel</Link>
      <button className="btn btn-success" onClick={addUser}>Add User</button>
    </div>
  )
}

export default AddUserPage