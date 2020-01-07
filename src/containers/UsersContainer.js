import React from 'react';
import Users from '../components/Users';
import { connect } from 'react-redux';
import { getUsers } from '../modules/users';
import { Preloader } from '../lib/PreloadContext';

const { useEffect } = React;

const UsersContainer = ({ users, getUsers }) => {
  // 컴포넌트가 마운트되고 나서 호출
  useEffect(() => {
    if (users) return;
    getUsers();
  }, [getUsers, users]);
  return (
    <div>
      <Users users={users} />
      <Preloader resolve={getUsers} />
    </div>
  );
};

export default connect(
  state => ({
    users: state.users.users
  }),
  {
    getUsers
  }
)(UsersContainer);
