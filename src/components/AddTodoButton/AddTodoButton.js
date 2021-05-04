import React from 'react';
import { FAB } from 'react-native-paper';

import { styles } from './styles';

export const AddTodoButton = ({ onPress }) => (
  <FAB
    icon="plus"
    style={styles.fab}
    small
    mode="contained"
    color="#fff"
    onPress={onPress}
  />
);
