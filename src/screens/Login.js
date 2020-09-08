import React from 'react';
import { Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';
import { SvgUri } from 'react-native-svg';
// import { FontAwesome } from '@expo/vector-icons';
import { styles } from './Login.style';
import logo from '../../assets/TeamPicker.svg';
import google from '../../assets/google.svg';
import facebook from '../../assets/facebook.svg';

const logoUri = Image.resolveAssetSource(logo).uri;
const googleLogoUri = Image.resolveAssetSource(google).uri;
const facebookLogoUri = Image.resolveAssetSource(facebook).uri;

export const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigation = useNavigation();

  const handleNavigateClick = () => {
    navigation.dispatch(StackActions.replace('Root'));
  };

  return (
    <View style={styles.container}>
      <SvgUri style={styles.logo} uri={logoUri} />
      <Image source={{ uri: logoUri }} style={styles.logo} />
      <TextInput
        placeholder="Username"
        keyboardType="email-address"
        style={styles.textInput}
        onChangeText={(value) => setUsername(value)}
        value={username}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={{ ...styles.textInput, marginTop: 15 }}
        onChangeText={(value) => setPassword(value)}
        value={password}
      />
      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot a password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.signInButton}
        onPress={handleNavigateClick}
      >
        <Text style={styles.signInButtonText}>SIGN IN</Text>
      </TouchableOpacity>
      <Text style={styles.socialSignInText}>Or Sign In using</Text>
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <SvgUri
            width="70%"
            style={styles.socialButtonIcon}
            uri={facebookLogoUri}
          />
          {/* <FontAwesome name="facebook" style={styles.socialButtonIcon} /> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          {/* TODO: replace with colorful Google icon */}
          <SvgUri
            width="70%"
            style={styles.socialButtonIcon}
            uri={googleLogoUri}
          />
          {/* <FontAwesome name="google" style={styles.socialButtonIcon} /> */}
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContent}>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Do not have an account?</Text>
          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.signUpButtonText}>Create new</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
