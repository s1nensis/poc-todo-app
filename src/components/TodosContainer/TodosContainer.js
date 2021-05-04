import React from 'react';
import { connect } from 'react-redux';

import Todo from '../Todo/Todo';
import * as Styled from './styles';

const TodosContainer = ({ todo_list, comp }) => {
  const todos = todo_list;
  const todosActive = todos.filter((task) => !task.completed);
  const todosCompleted = todos.filter((task) => !!task.completed);

  return comp ? (
    <Styled.Wrapper>
      {todosCompleted.map((task) => {
        return <Todo key={task.id} task={task} />;
      })}
    </Styled.Wrapper>
  ) : (
    <Styled.Wrapper>
      {todosActive.map((task) => {
        return <Todo key={task.id} task={task} />;
      })}
    </Styled.Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    todo_list: state.todos.todo_list,
  };
};

export default connect(mapStateToProps)(TodosContainer);
