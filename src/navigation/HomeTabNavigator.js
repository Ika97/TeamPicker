import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';

const HomeTabStack = createStackNavigator();

export const HomeTabNavigator = () => {
  return (
    <HomeTabStack.Navigator>
      <HomeTabStack.Screen name="Root" component={Home} />
    </HomeTabStack.Navigator>
  );
};
