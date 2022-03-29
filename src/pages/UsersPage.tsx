import { FC, useState, useMemo } from "react"
import { Link } from "react-router-dom"
import UserModal from "../components/UserModal"
import UserList from "../components/UserList"
import UserService from "../API/UserService"
import CityService from "../API/CityService"
import Pagination from "../components/Pagination"

type usersProps = {
  id: string,
  fio: string,
  cityId: string
}[]
type cityProps = {
  id: string,
  name: string
}[]
type userProps = {
  id: string,
  fio: string,
  cityId: string | undefined
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

  const [selectedSort, setSelectedSort] =  useState('')
  const [selectedSortDirection, setSelectedSortDirection] =  useState(false)

  const sortedUsers = useMemo(() => {
    if (selectedSort){
      if(selectedSortDirection){
        return [...users].sort( (a: any, b: any) => 
          a[selectedSort].localeCompare(b[selectedSort]))
      }
      return [...users].sort( (a: any, b: any) => 
        b[selectedSort].localeCompare(a[selectedSort]))
    }
    return users
  }, [selectedSort, selectedSortDirection, users])

  function handlerSelectSort(sort: string) : void {
    setSelectedSort(sort)
    setSelectedSortDirection(!selectedSortDirection)
  }

  // pagination
  const [currentPage, setCurrentPage] = useState(1)
  const usersLimitOnPage = 3
  const countOfPages = Math.ceil(sortedUsers.length / usersLimitOnPage)
  const indexOfLastUser = currentPage * usersLimitOnPage
  const indexOfFirstUser = indexOfLastUser - usersLimitOnPage
  const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser)

  return (
    <div className="container">
      <Link className="btn btn-success add-user-btn" to="/add_user">Add User</Link>

      <div className="sorters">
        <span
          className={
            (selectedSort !== 'fio') ? '' :
            (selectedSortDirection) ? 'active-sorter desc-sorter' : 'active-sorter asc-sorter' 
          }
          onClick={() => handlerSelectSort('fio')}>
          FIO
        </span>
        <span
          className={
            (selectedSort !== 'cityId') ? '' :
            (selectedSortDirection) ? 'active-sorter desc-sorter' : 'active-sorter asc-sorter' 
          }
          onClick={() => handlerSelectSort('cityId')}>
          CITY
        </span>
      </div>

      <UserModal
        visible={modal}
        setVisible={setModal}
        userForRemove={userForRemove}
        title="Удаление пользователя"
      />
      <UserList
        users={currentUsers}
        setUserForRemove={setUserForRemove}
        setVisible={setModal}
      />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        countOfPages={countOfPages}/>
    </div>
  )
}

export default UsersPage
