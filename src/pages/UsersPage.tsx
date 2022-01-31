import { FC, useContext } from 'react';
import {AuthContext} from "../context"

const UsersPage: FC = () => {
  const auth = useContext(AuthContext);
  const logOut = (): void => 
    {
      auth?.setIsAuth(false);
      localStorage.removeItem('auth');
    }
  return (
    <div>
      <button onClick={logOut}>LogOut</button>
    </div>
  );
};

export default UsersPage;