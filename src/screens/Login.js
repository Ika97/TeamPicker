import React from 'react';
import { Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { SvgUri } from 'react-native-svg';
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
  const [visible, setVisibility] = React.useState(false);
  const navigation = useNavigation();
  const icon = !visible ? 'eye-slash' : 'eye';

  const handleNavigateClick = () => {
    navigation.dispatch(StackActions.replace('Root'));
  };

  const signUpNavigateClick = () => {
    navigation.dispatch(StackActions.replace('SignUp'));
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
      <View style={{ ...styles.passwordContainer, marginTop: 15 }}>
        <TextInput
          placeholder="Password"
          secureTextEntry={!visible}
          style={styles.passwordInput}
          onChangeText={(value) => setPassword(value)}
          value={password}
        />
        <TouchableOpacity
          style={{ ...styles.icons }}
          onPress={() => setVisibility(!visible)}
        >
          <FontAwesome style={{ ...styles.icon }} name={icon} color="#9e9e9e" />
        </TouchableOpacity>
      </View>

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
            <Text style={styles.signUpButtonText} onPress={signUpNavigateClick}>
              Create new
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
