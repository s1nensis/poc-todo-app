import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import ActiveTodos from '../components/ActiveTodos/AtiveTodos';
import { CompletedTodos } from '../components/CompletedTodos/CompletedTodos';

const Tab = createMaterialBottomTabNavigator();

export const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator activeColor="#fff" barStyle={{ backgroundColor: '#000' }}>
        <Tab.Screen
          name="Active"
          component={ActiveTodos}
          options={{
            tabBarLabel: 'Active',
            tabBarIcon: 'clipboard-text-outline',
          }}
        />
        <Tab.Screen
          name="Completed"
          component={CompletedTodos}
          options={{
            tabBarLabel: 'Completed',
            tabBarIcon: 'clipboard-check-outline',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
