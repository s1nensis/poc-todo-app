import React from 'react';
import { TextInput, View } from 'react-native';

import * as Styled from './styles';

export const TodoInput = ({ setTask }) => {
  return (
    <Styled.Wrapper>
      <Styled.Input
        placeholder="Add a task"
        autoFocus
        onChangeText={(task) => setTask(task)}
      ></Styled.Input>
    </Styled.Wrapper>
  );
};
