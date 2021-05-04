import * as React from 'react';
import { Appbar } from 'react-native-paper';

export const Header = () => {
  return (
    <Appbar.Header style={{ backgroundColor: 'black' }}>
      <Appbar.Content title="TodoApp" subtitle="Organize your tasks" />
    </Appbar.Header>
  );
};
