import React from 'react';
import { Text, View, Button } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';

export const Login = () => {
  const navigation = useNavigation();

  const handleNavigateClick = () => {
    navigation.dispatch(StackActions.replace('Root'));
  };

  return (
    <View>
      <Text style={{ marginBottom: 20 }}>Login</Text>
      <Button onPress={handleNavigateClick} title="Navigate to Root" />
    </View>
  );
};
