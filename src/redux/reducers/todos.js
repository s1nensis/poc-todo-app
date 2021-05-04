import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from '../actionTypes';

const initialState = {
  todo_list: [
    { id: -10, task: 'task 01', completed: false },
    { id: -20, task: 'task 02', completed: false },
    { id: -30, task: 'task 03', completed: false },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, task, completed } = action.payload;
      return {
        ...state,
        todo_list: [...state.todo_list, { id, task, completed }],
      };
    }
    case DELETE_TODO: {
      const { id } = action.payload;
      console.log('delete todo');
      return {
        ...state,
        todo_list: state.todo_list.filter((todo) => todo.id != id),
      };
    }
    case COMPLETE_TODO: {
      const { id } = action.payload;

      return {
        ...state,
        todo_list: state.todo_list.map((todo) => {
          if (id === todo.id) todo.completed = !todo.completed;
          return todo;
        }),
      };
    }
    default:
      console.log('some action');
      return state;
  }
}
