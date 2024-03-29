import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class IntegrationTest extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Hey! This is an Integration Test with React Native !!!</Text>
      </View>
    )
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('IntegrationApp', () => IntegrationTest);
