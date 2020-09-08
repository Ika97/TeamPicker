import React from 'react';
import Navigation from './navigation';
import UserProvider from './contexts/UserContext';

export default function App() {
  return (
    <UserProvider>
      <Navigation />
    </UserProvider>
  );
}
