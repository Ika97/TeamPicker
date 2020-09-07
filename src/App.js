import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Navigation from './navigation';
import UserProvider from './contexts/UserContext';

export default function App() {
  return (
    <UserProvider>
      <SafeAreaView style={styles.container}>
        <Navigation />
      </SafeAreaView>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
