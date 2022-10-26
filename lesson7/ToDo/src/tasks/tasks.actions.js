import * as tasksGateWays from './tasks.gateWays';
import { tasksSelector } from './tasks.selectors';

export const TASKS_LIST_RECIEVED = 'TASKS_LIST_RECIEVED';
export const SHOW_SPINNER = 'SHOW_SPINNER';

export const showSpinner = () => {
  return {
    type: SHOW_SPINNER,
  };
};

export const tasksListRecieved = taskList => {
  return {
    type: TASKS_LIST_RECIEVED,
    payload: {
      taskList,
    },
  };
};

export const getTasksList = () => {
  const thunkAction = function (dispatch) {
    dispatch(showSpinner());
    tasksGateWays.fetchTasksList().then(taskData => dispatch(tasksListRecieved(taskData)));
  };
  return thunkAction;
};

export const updateTasksList = taskId => {
  const thunkAction = function (dispatch, getState) {
    dispatch(showSpinner());
    const state = getState();
    const taskList = tasksSelector(state);
    const task = taskList.find(task => task.id === taskId);
    const updatedTask = { ...task, done: !task.done };

    tasksGateWays.updateTasks(taskId, updatedTask).then(() => dispatch(getTasksList()));
  };
  return thunkAction;
};

export const deleteTasksList = taskId => {
  const thunkAction = function (dispatch) {
    dispatch(showSpinner());
    tasksGateWays.deleteTask(taskId).then(() => dispatch(getTasksList()));
  };
  return thunkAction;
};

export const createTasksList = text => {
  const thunkAction = function (dispatch) {
    if (text === '') {
      return null;
    }
    dispatch(showSpinner());
    const newTask = {
      text,
      done: false,
    };
    tasksGateWays.createTasks(newTask).then(() => dispatch(getTasksList()));
  };
  return thunkAction;
};
