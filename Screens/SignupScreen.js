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
} from 'react-native';
import { Header } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';

export default class SignupScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      contact: '',
      address: '',
    };
  }
  signup = async (email, password, confirmPassword) => {
    if (password != confirmPassword) {
      Alert.alert('Check your password or username');
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          db.collection('users').add({
            name: this.state.name,
            email: this.state.email,
            contact: this.state.contact,
            address: this.state.address,
          });
          return Alert.alert('User added successfully');
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage);
        });
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
        <TextInput
          style={styles.inputbox}
          placeholder="Enter your full name"
          onChangeText={(text) => {
            this.setState({
              email: text,
            });
          }}
        />
        <TextInput
          style={styles.inputbox}
          placeholder="Enter your Email"
          onChangeText={(text) => {
            this.setState({
              email: text,
            });
          }}
        />
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
        <TextInput
          style={styles.inputbox}
          placeholder="Confirm the password"
          secureTextEntry={true}
          onChangeText={(text) => {
            this.setState({
              confirmPassword: text,
            });
          }}
        />
        <TextInput
          style={styles.inputbox}
          placeholder="Enter your contact number"
          onChangeText={(text) => {
            this.setState({
              contact: text,
            });
          }}
        />
        <TextInput
          style={styles.inputbox}
          placeholder="Enter your address"
          multiline={true}
          onChangeText={(text) => {
            this.setState({
              address: text,
            });
          }}
        />
        <TouchableOpacity
          style={styles.enterButton}
          onPress={this.signup(
            this.state.email,
            this.state.password,
            this.state.confirmPassword
          )}>
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
    marginTop: 15,
    textAlign: 'center',
    width: '60%',
    height: 50,
    borderWidth: 4,
    alignSelf: 'center',
    backgroundColor: '#feffc4',
  },
  enterButton: {
    marginTop: 45,
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
