import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { BottomTabNavigator } from './BottomTabNavigator';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { UserContext } from '../contexts/UserContext';

const Stack = createStackNavigator();

function RootNavigator() {
  const { user, loading } = React.useContext(UserContext);

  React.useEffect(() => {
    const keepSplash = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    };

    keepSplash();
  });

  React.useEffect(() => {
    const hideSplash = async () => {
      if (!loading) {
        await SplashScreen.hideAsync();
      }
    };

    hideSplash();
  }, [loading]);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="Root" component={BottomTabNavigator} />
      ) : (
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      )}
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
