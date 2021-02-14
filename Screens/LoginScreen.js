import * as React from 'react';
import {
  ToastAndroid,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  KeyboardAvoidingView
} from 'react-native';
import { Header } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }
  login = async (email, password) => {
    if (email && password) {
      try {
        const response = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        if (response) {
          this.props.navigation.navigate('TabNavigator');
        }
      } catch (error) {
        switch (error.code) {
          case 'auth/userNotFound':
            Alert.alert('User not found');
            break;
          case 'auth/emailNotFound':
            Alert.alert('Incorrect email/password');
            break;
        }
      }
    } else {
      //Alert.alert('Enter the email and password');
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}>
          <Text>Back</Text>
        </TouchableOpacity>
        <KeyboardAvoidingView>
        <TextInput
          style={styles.inputbox}
          placeholder="Enter your Email"
          onChangeText={(text) => {
            this.setState({
              email: text,
            });
          }}
        />
        </KeyboardAvoidingView>
        <KeyboardAvoidingView>
        <TextInput
          style={styles.inputbox}
          placeholder="Enter the Password"
          secureTextEntry={true}
          onChangeText={(text) => {
            this.setState({
              password: text,
            });
          }}
        />
        </KeyboardAvoidingView>
        <TouchableOpacity
          style={styles.enterButton}
          onPress={this.login(this.state.email, this.state.password)}>
          <Text>Enter</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffd1ea',
  },
  inputbox: {
    marginTop: 90,
    textAlign: 'center',
    width: '60%',
    height: 50,
    borderWidth: 4,
    alignSelf: 'center',
    backgroundColor: '#feffc4',
    borderRadius: 20,
  },
  enterButton: {
    marginTop: 75,
    textAlign: 'center',
    width: '70%',
    height: 50,
    alignSelf: 'center',
    backgroundColor: '#12deb8',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    marginTop: 5,
    marginLeft: 10,
    width: '20%',
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: 'yellow',
  },
});