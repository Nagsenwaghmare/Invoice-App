/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import Receipt from './components/Receipt';
import Table from './components/Table';
import Tab from './components/Tab';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';





const App = () => {
  return (
    <View style={styles.container}>
      <Receipt/>
      {/* <Tab/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
  },
});

export default App;


// import React, {Component} from 'react';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

// import S1 from './components/screen1';
// import S2 from './components/screen2';

// const App = createStackNavigator(
//   {
//     S1: {screen:S1},
//     S2: {screen:S2},
//   }
// );

// export default createAppContainer(App);

