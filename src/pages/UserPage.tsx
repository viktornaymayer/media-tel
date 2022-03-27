import { FC, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SelectCity from '../components/SelectCity'
import UserService from '../API/UserService'

function getUser(){
  const urlArr = window.location.href.split('/')
  const userId = urlArr[urlArr.length - 1]
  return UserService.getUserById(userId)
}

const UserPage: FC = () => {
  const navigate = useNavigate()

  const user = getUser()
  const [userFio, setUserFio] = useState(user?.fio)
  const [userCity, setUserCity] = useState(user?.cityId)

  function updateUser(){
    if (!userFio){
      alert('Please enter the name!')
      return
    }

    let updatedUser = {
      id: user?.id,
      fio: userFio,
      cityId: userCity
    }
    alert(`
      Send request to add new user.\n
      User info:
      id: ${updatedUser.id}
      fio: ${updatedUser.fio}
      cityId: ${updatedUser.cityId}
    `)
    UserService.updateUser(updatedUser)
    navigate('../')
  }

  return (
    <div className="container edit-user-page">
      <h3>EDIT USER</h3>
      <input
        type="text"
        placeholder="Enter name"
        value={userFio}
        onChange={e => setUserFio(e.currentTarget.value)}/>
      <SelectCity userCityId={user?.cityId} setUserCity={setUserCity} />
      <Link className="btn btn-secondary" to="../">Cancel</Link>
      <button className="btn btn-success" onClick={updateUser}>Save</button>
    </div>
  );
};

export default UserPage;