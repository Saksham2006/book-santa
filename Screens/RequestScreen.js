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

export default class RequestScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.box}
          placeholder={'Enter the name of the book'}
        />
        <TextInput
          style={styles.box}
          placeholder={'Enter the name of the author'}
        />
        <TouchableOpacity style={styles.requestButton}>
          <Text style={styles.text}>Request</Text>
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
  text: {
    textAlign: 'center',
    fontSize: 24,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  requestButton: {
    marginTop: 50,
    textAlign: 'center',
    width: '40%',
    height: 50,
    alignSelf: 'center',
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    marginTop: 50,
    width: '80%',
    height: 50,
    borderWidth: 4,
    alignSelf: 'center',
  },
});
