import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './home';
import AboutScreen from './about';
import LoginScreen from './login';
import SettingsScreen from './settings';

//place variables here
// const whatever ={}
//const tabNavigator = createBottomTabNavigator({whatever})

const tabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  About: AboutScreen,
  Setting: SettingsScreen,
  Login: LoginScreen

})

//export default means initialize app here, first screen
export default createAppContainer(tabNavigator)

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Home screen is open
        </Text>
      </View>
    );
  }
}

class AboutScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          About screen is open
        </Text>
      </View>
    );
  }
}

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Setting screen is open
        </Text>
      </View>
    );
  }
}

class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Setting screen is open
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
