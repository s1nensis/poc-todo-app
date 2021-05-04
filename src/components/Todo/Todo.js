import React from 'react';
import { CheckBox } from 'react-native';
import { IconButton } from 'react-native-paper';
import { connect } from 'react-redux';

import * as Styled from './style';
import { deleteTodo, completeTodo } from '../../redux/actions';

const Todo = ({ task, deleteTodo, completeTodo }) => {
  const handleDeleteTodo = () => {
    deleteTodo(task.id);
    console.log(task.id);
  };

  const handleCompleteTodo = () => {
    completeTodo(task.id);
  };

  return (
    <Styled.TodoWrapper>
      <CheckBox
        value={task.completed}
        tintColors={{ true: '#fff' }}
        onValueChange={() => handleCompleteTodo()}
      />
      <Styled.TodoText>{task.task}</Styled.TodoText>
      <IconButton
        icon="trash-can-outline"
        size={25}
        onPress={handleDeleteTodo}
        color={'#fff'}
      ></IconButton>
    </Styled.TodoWrapper>
  );
};

export default connect(null, { deleteTodo, completeTodo })(Todo);
