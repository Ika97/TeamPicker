import React from 'react';
import { Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { SvgUri } from 'react-native-svg';
import { styles } from './SignIn.style';
import logo from '../../assets/TeamPicker.svg';

const logoUri = Image.resolveAssetSource(logo).uri;

export const SignUp = () => {
  const [username, setUsername] = React.useState('');
  const [useremail, setUseremail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [repeatPassword, setRepeatPassword] = React.useState('');
  const [visible, setVisibility] = React.useState(false);
  const navigation = useNavigation();
  const icon = !visible ? 'eye-slash' : 'eye';

  const handleNavigateClick = () => {
    navigation.dispatch(StackActions.replace('Root'));
  };

  const loginNavigateClick = () => {
    navigation.dispatch(StackActions.replace('SignIn'));
  };

  return (
    <View style={styles.container}>
      <SvgUri style={styles.logo} uri={logoUri} />
      <Image source={{ uri: logoUri }} style={styles.logo} />
      <TextInput
        placeholder="Username"
        autoCorrect="false"
        style={styles.textInput}
        onChangeText={(value) => setUsername(value)}
        value={username}
      />
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        style={{ ...styles.textInput, marginTop: 15 }}
        onChangeText={(value) => setUseremail(value)}
        value={useremail}
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
      <View style={{ ...styles.passwordContainer, marginTop: 15 }}>
        <TextInput
          placeholder="Repeat Password"
          secureTextEntry={!visible}
          style={styles.passwordInput}
          onChangeText={(value) => setRepeatPassword(value)}
          value={repeatPassword}
        />
        <TouchableOpacity
          style={{ ...styles.icons }}
          onPress={() => setVisibility(!visible)}
        >
          <FontAwesome style={{ ...styles.icon }} name={icon} color="#9e9e9e" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.signInButton}
        onPress={handleNavigateClick}
      >
        <Text style={styles.signInButtonText}>SIGN UP</Text>
      </TouchableOpacity>

      <View style={styles.bottomContent}>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Already have an account?</Text>
          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.signUpButtonText} onPress={loginNavigateClick}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
