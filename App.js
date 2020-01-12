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
import { createStackNavigator } from 'react-navigation-stack';

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
      <Button
        onPress={() => this.props.navigation.navigate('Next')}
        title='Go next screen'
      />
      <Text>MyHomeScreen</Text>
      </View>
    );
  }
}

class MyNextScreen extends React.Component {
  render(){
    return(
      <View>
        <Text>my screen</Text>
        <Button
        onPress={() => this.props.navigation.navigate('Second')}
        title='Go next screen'
      />
      </View>
    )
  }
}

class MySecondScreen extends React.Component {
  render(){
    return(
      <View>
        <Text>my second screen</Text>
        <Button
        onPress={() => this.props.navigation.navigate('Next')}
        title='Go next screen'
      />
      </View>
    )
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

const MyNavigationStack = createStackNavigator({
  Next: {
    screen: MyNextScreen
  },
  Second: {
    screen: MySecondScreen
  }
})

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
  Next: {
    screen: MyNavigationStack
  }
}, {
  contentComponent: CustomDrawerContentComponent,
  minSwipeDistance: 64,
  initialRouteName: 'Home'
});

const MyApp = createAppContainer(MyDrawerNavigator);

export default MyApp;