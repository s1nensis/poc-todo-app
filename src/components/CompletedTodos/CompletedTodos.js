import React from 'react';
import { View } from 'react-native';

import TodosContainer from '../TodosContainer/TodosContainer';

export const CompletedTodos = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#111',
        padding: 10,
      }}
    >
      <TodosContainer comp={true} />
    </View>
  );
};
