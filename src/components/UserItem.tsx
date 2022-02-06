import React, { FC } from 'react';

type Props = {
  user: {
    id: string,
    fio: string,
    cityid: string
  },
  city: string
}

const UserItem: FC<Props> = ({user, city}) => {
  return (
    <div className='user-item'>
      <div className="user-data">
        <strong className="user-fio">{user.fio}</strong>
        <span className="user-city">{city}</span>
      </div>
      <div className="user-btns">
        <button className='btn-edit'>Edit</button>
        <button className='btn-del'>Del</button>
      </div>
    </div>
  );
};

export default UserItem;