import React from 'react';
import { useFirebase } from '../hooks/useFirebase';

export const UserContext = React.createContext({ user: null });

const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const { auth } = useFirebase();

  React.useEffect(() => {
    auth.onAuthStateChanged((newUser) => {
      setUser(newUser);
      setLoading(false);
    });
  });

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
