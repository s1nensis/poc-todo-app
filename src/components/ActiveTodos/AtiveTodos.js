import React, { useState } from 'react';
import { connect } from 'react-redux';

import TodosContainer from '../TodosContainer/TodosContainer';
import { addTodo } from '../../redux/actions';
import { AddTodoButton } from '../AddTodoButton/AddTodoButton';
import { TodoInput } from '../TodoInput/TodoInput';
import * as Styled from './styles';

const ActiveTodos = ({ addTodo }) => {
  const [task, setTask] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleAddTodo = () => {
    if (!showInput) {
      setShowInput(true);
      setTask('');
    } else {
      task ? addTodo(task) : setTask('');
      setShowInput(false);
    }
  };

  return (
    <Styled.Wrapper>
      {showInput ? <TodoInput setTask={setTask} /> : null}
      <TodosContainer />
      <AddTodoButton onPress={handleAddTodo} />
    </Styled.Wrapper>
  );
};

const mapDispatchToProps = { addTodo };

export default connect(null, mapDispatchToProps)(ActiveTodos);
