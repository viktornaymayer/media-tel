// import axios from "axios"

export default class UserService {
  static getUsers(){
    /*
    const response = await axios.get('https://somesite.com/users', {
      params: { _limit: limit, _page: page }
    });
     */
    const response = [
      {
        id: '842163b9-3a13-4fa2-8004-2c1585efe369',
        fio: "Ivanov Ivan Ivanovich",
        cityId: "f8279d8a-bbd2-44d7-b590-91ee9a6eaefa" 
      },
      {
        id: '1d5a1ccb-4931-409c-8bf5-d8a3e16bd1b5',
        fio: "Semenov Semen Semenovich",
        cityId: "7c4c67b6-b2a3-4514-94b1-f004a94a8fc3"
      },
      {
        id: '638a2d2c-d430-41c9-b1d0-f0c8e5e2e830',
        fio: "Sidorov Sidr Sidrovich",
        cityId: "d1fb084b-86b2-4775-8d61-5b218d3f7712"
      },
      {
        id: '638a2d2c-d430-c9-b1ddd0-f0c8e2e830',
        fio: "Naymayer Viktor Sergeevich",
        cityId: "d1fb084b-86b2-4775-8d61-5b218d3f7712"
      },
    ]
    return response
  }
  static getUserById(id){
    // const response = await axios.get('https://somesite.com/user/' + id);
    const response = this.getUsers().find(user => user.id === id)
    return response
  }

  static addUser(user){
    /*
      const response = await axios.post(
        'https://somesite.com/add_user', 
        {
          id: user.id,
          fio: user.fio,
          cityId: user.cityId
        })
     */
    alert(`The user has been added!\nUser ID: ${user.id}!`)
  }
  static updateUser(user){
    /*
      const response = await axios.post(
        'https://somesite.com/update_user', 
        {
          id: user.id,
          fio: user.fio,
          cityId: user.cityId
        })
     */
    alert(`The user has been updated!\nUser ID: ${user.id}!`)
  }
  static delUser(id){
    // const response = await axios.delete('https://somesite.com/user/' + id);
    alert(`The user has been removed from the database!\nUser ID: ${id}`)
  }
}