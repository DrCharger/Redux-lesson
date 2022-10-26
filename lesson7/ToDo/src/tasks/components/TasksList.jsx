import React from 'react';
import InputElement from './InputElement';
import Task from './Task';
import { connect } from 'react-redux';
import { isFetchingSelector, sortedTaskSelector } from '../tasks.selectors';
import * as taskAction from '../tasks.actions';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

class TasksList extends React.Component {
  componentDidMount() {
    this.props.getTasksList();
  }

  render() {
    return (
      <main className="todo-list">
        <InputElement onCreate={this.props.createTask} />
        <ul className="list">
          {this.props.isFetching && <Spinner size={50} />}
          {this.props.tasks.map(task => (
            <Task
              key={task.id}
              {...task}
              onChange={this.props.updateTask}
              onDelete={this.props.deleteTask}
            />
          ))}
        </ul>
      </main>
    );
  }
}

const mapState = state => {
  return {
    tasks: sortedTaskSelector(state),
    isFetching: isFetchingSelector(state),
  };
};

const mapDispatch = {
  getTasksList: taskAction.getTasksList,
  updateTask: taskAction.updateTasksList,
  deleteTask: taskAction.deleteTasksList,
  createTask: taskAction.createTasksList,
};

TasksList.propTypes = {
  getTasksList: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape()),
  isFetching: PropTypes.bool,
};

TasksList.defaultProps = {
  isFetching: false,
};
export default connect(mapState, mapDispatch)(TasksList);
