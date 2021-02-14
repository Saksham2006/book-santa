import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import { Header, ListItem } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';

export default class DonateScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      userID: firebase.auth().currentUser.email,
      requestedBookList: [],
    };
    this.requestRef = null;
  }

  getRequestedBooks = () => {
    this.requestRef = db.collection('RequestedBooks').onSnapshot((snapshot) => {
      var requestedBookList = snapshot.docs.map((doc) => doc.data());
      this.setState({
        requestedBookList: requestedBookList,
      });
    });
  };

  componentDidMount() {
    this.getRequestedBooks();
  }

  componentWillUnmount() {
    this.requestRef();
  }

  keyExtractor = (item, index) => {
    index.toString();
  };

  render() {
    return <View style={styles.container}></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffd1ea',
  },
});
