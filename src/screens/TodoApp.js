import React from 'react';

import { Header } from '../components/Header/Header';
import { Tabs } from '../navigation/MainNavigator';

import * as Styled from './styles';

export const TodoApp = () => {
  return (
    <Styled.Wrapper>
      <Header />
      <Tabs />
    </Styled.Wrapper>
  );
};
