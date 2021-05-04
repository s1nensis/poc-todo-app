import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from './actionTypes';

let nextTodoId = 0;

export const addTodo = (task) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    task: task,
    completed: false,
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});

export const completeTodo = (id) => ({
  type: COMPLETE_TODO,
  payload: {
    id,
  },
});
