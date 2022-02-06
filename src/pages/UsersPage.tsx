import React, { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import UserList from '../components/UserList';

const UsersPage: FC = () => {

  const [users, setUsers] = useState([
    {id: uuidv4(), fio: 'Ivanov Ivan Ivanovich', cityid: '1'},
    {id: uuidv4(), fio: 'Semenov Semen Semenovich', cityid: '2'},
    {id: uuidv4(), fio: 'Sidorov Sidr Sidrovich', cityid: '3'}
  ])
  const [cities, setCities] = useState([
    {id: '1', name: 'Ivanovo'},
    {id: '2', name: 'Semenovo'},
    {id: '3', name: 'Sidorovo'}
  ])

  return (
    <div>
      <UserList users={users} cities={cities}/>
    </div>
  );
};

export default UsersPage;