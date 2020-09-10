import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingTop: 80,
  },
  logo: {
    width: 250,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  textInput: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  forgotPasswordContainer: {
    marginTop: 10,
    width: '100%',
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    color: '#828282',
    fontSize: 12,
  },
  signInButton: {
    backgroundColor: '#2F80ED',
    marginTop: 20,
    width: '100%',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialSignInText: {
    marginTop: 40,
    color: '#828282',
    fontSize: 14,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    width: 100,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  socialButton: {
    width: 40,
    height: 40,
    padding: 5,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
  },
  bottomContent: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 40,
  },
  signUpContainer: {
    flexDirection: 'row',
  },
  signUpText: {
    color: '#828282',
  },
  signUpButton: {
    marginLeft: 10,
  },
  signUpButtonText: {
    color: '#828282',
    fontWeight: 'bold',
  },
});
