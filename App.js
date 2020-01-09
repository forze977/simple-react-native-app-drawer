/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button
} from 'react-native';

import SafeAreaView from 'react-native-safe-area-view';

import { createDrawerNavigator, DrawerActions, DrawerItems  } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <Text>edited</Text>
      {/* <DrawerItems {...props} /> */}
    </SafeAreaView>
  </ScrollView>
);

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
      source={{uri: 'https://unsplash.com/photos/yicz57hPEUU/download?force=true'}}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  render() {
    return (
      <View>
        <Button title={'open drawer'} onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}/>
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
      <Text>MyHomeScreen</Text>
      </View>
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={{uri: 'https://unsplash.com/photos/yicz57hPEUU/download?force=true'}}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  render() {
    return (
      <View>
        <Button title={'open drawer'} onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}/>
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
      <Text>MyNotificationsScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  container: {
    flex: 1,
  },
});

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
}, {
  contentComponent: CustomDrawerContentComponent,
  minSwipeDistance: 64
});

const MyApp = createAppContainer(MyDrawerNavigator);

export default MyApp;