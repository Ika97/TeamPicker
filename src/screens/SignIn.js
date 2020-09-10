import React from 'react';
import { Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { styles } from './SignIn.style';
import logo from '../../assets/TeamPicker.svg';
import google from '../../assets/google.svg';
import facebook from '../../assets/facebook.svg';
import { useAuthentication } from '../hooks/useAuthentication';

const logoUri = Image.resolveAssetSource(logo).uri;
const googleLogoUri = Image.resolveAssetSource(google).uri;
const facebookLogoUri = Image.resolveAssetSource(facebook).uri;

export const SignIn = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { loginWithFacebook } = useAuthentication();

  const signInWithFacebook = async () => {
    try {
      await loginWithFacebook();
    } catch (e) {
      console.log(e);
    }
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
      <TouchableOpacity style={styles.signInButton} onPress={() => {}}>
        <Text style={styles.signInButtonText}>SIGN IN</Text>
      </TouchableOpacity>
      <Text style={styles.socialSignInText}>Or Sign In using</Text>
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={signInWithFacebook}
        >
          <SvgUri width="100%" uri={facebookLogoUri} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <SvgUri width="100%" uri={googleLogoUri} />
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
