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
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import SignupScreen from './Screens/SignupScreen';
import DonateScreen from './Screens/DonateScreen';
import RequestScreen from './Screens/RequestScreen';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Request: { screen: RequestScreen },
    Donate: { screen: DonateScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        if (routeName == 'Request') {
          return (
            <Image
              source={require('./assets/request.png')}
              style={{ width: 30, height: 30 }}
            />
          );
        } else if (routeName == 'Donate') {
          return (
            <Image
              source={require('./assets/donate.png')}
              style={{ width: 30, height: 30 }}
            />
          );
        }
      },
    }),
  }
);

const SwitchNavigator = createSwitchNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen },
  Signup: { screen: SignupScreen },
  TabNavigator: { screen: TabNavigator },
});

const AppContainer = createAppContainer(SwitchNavigator);