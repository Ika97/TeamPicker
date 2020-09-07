import React from 'react';
import { useFirebase } from '../hooks/useFirebase';

export const UserContext = React.createContext({ user: null });

const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const { firebase } = useFirebase();

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((newUser) => setUser(newUser));
  });

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
