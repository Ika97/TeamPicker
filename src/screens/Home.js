import React from 'react';
import { Text, View, Button } from 'react-native';
import { useAuthentication } from '../hooks/useAuthentication';

export const Home = () => {
  const { logOut } = useAuthentication();

  const handleLogOut = async () => {
    await logOut();
  };

  return (
    <View style={{ flex: 1 }}>
      <Button onPress={handleLogOut} title="Log out" />
      <Text style={{ color: '#000' }}>Home</Text>
    </View>
  );
};
