import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { TodoApp } from './src/screens/TodoApp';
import { store, persistor } from './src/redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TodoApp />
        <StatusBar style="auto" />
      </PersistGate>
    </Provider>
  );
};
