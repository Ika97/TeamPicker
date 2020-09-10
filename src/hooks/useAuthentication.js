import * as Facebook from 'expo-facebook';
import { useFirebase } from './useFirebase';

export const useAuthentication = () => {
  const { firebase, auth } = useFirebase();

  const loginWithFacebook = async () => {
    await Facebook.initializeAsync('311872773430312');

    const { type, token } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile'],
    });

    if (type === 'success') {
      // Build Firebase credential with the Facebook access token.
      const credential = firebase.auth.FacebookAuthProvider.credential(token);

      // Sign in with credential from the Facebook user.
      auth.signInWithCredential(credential).catch((error) => {
        throw error;
      });
    }
  };

  const logOut = async () => {
    try {
      await auth.signOut();
    } catch (e) {
      // an error
    }
  };

  return {
    loginWithFacebook,
    logOut,
  };
};
