import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import './config/ReactotronConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  info: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
  },
});

const App = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Hi!</Text>
    <Text style={styles.info}>
      Another basic template created with react-native-cli, Eslint (AirBnb),
      Prettier, Reactotron and editorconfig.
    </Text>
  </View>
);

export default App;
