import React from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import User from './User';
import * as counterActions from '../counter/counter.actions';

const UsersList = ({ users, next, prev, currentPage }) => {
  const perPage = 3;
  return (
    <div>
      <Pagination
        goNext={next}
        goPrev={prev}
        currentPage={currentPage}
        totalItems={users.length}
        itemsPerPage={perPage}
      />
      <ul className="users">
        {users
          .sort((a, b) => a.age - b.age)
          .slice(currentPage * perPage, currentPage * perPage + perPage)
          .map(user => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    users: state.users,
    currentPage: state.currentPage,
  };
};

const mapDispatch = {
  prev: counterActions.decrement,
  next: counterActions.increment,
};

export default connect(mapState, mapDispatch)(UsersList);