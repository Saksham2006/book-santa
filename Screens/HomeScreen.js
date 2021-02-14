import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { Header } from 'react-native-elements';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Signup');
          }}>
          <Text style={{ fontSize: 20 }}>Create a new user</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Login');
          }}>
          <Text style={{ fontSize: 20 }}>Existing user</Text>
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
  button: {
    marginTop: 100,
    textAlign: 'center',
    width: '70%',
    height: 70,
    alignSelf: 'center',
    backgroundColor: '#12deb8',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
