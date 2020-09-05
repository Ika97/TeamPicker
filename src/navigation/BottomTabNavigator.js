import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeTabNavigator } from './HomeTabNavigator';
import { Calendar } from '../screens/Calendar';

const BottomTab = createBottomTabNavigator();

export const BottomTabNavigator = () => (
  <BottomTab.Navigator>
    <BottomTab.Screen name="Home" component={HomeTabNavigator} />
    <BottomTab.Screen name="Calendar" component={Calendar} />
  </BottomTab.Navigator>
);
