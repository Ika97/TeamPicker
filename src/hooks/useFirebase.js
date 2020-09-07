import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCduNb9phfk9lnTUdCgiEBbPngV900CWZQ',
  authDomain: 'team-picker-d4731.firebaseapp.com',
  databaseURL: 'https://team-picker-d4731.firebaseio.com',
  projectId: 'team-picker-d4731',
  storageBucket: 'team-picker-d4731.appspot.com',
  messagingSenderId: '37137303962',
  appId: '1:37137303962:web:a0c6fe6d1077565c809223',
  measurementId: 'G-7F167TSK4J',
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
else firebase.app();

export const useFirebase = () => ({
  firebase,
  auth: firebase.auth(),
});
