import React from 'react';
import { connect } from 'react-redux';
import Filter from '../Filter';
import User from './User';
import { filtering } from './users.actions';
import { filteredTextSelector, selectedUsersSelector } from './users.selectors';

const UsersList = ({ users, filterText, changedInput }) => {
  return (
    <div>
      <Filter filterText={filterText} count={users.length} onChange={changedInput} />
      <ul className="users">
        {users.map(user => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    users: selectedUsersSelector(state),
    filterText: filteredTextSelector(state),
  };
};

const mapDispatch = {
  changedInput: filtering,
};

export default connect(mapState, mapDispatch)(UsersList);
