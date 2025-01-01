import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RootNavigator from './source/routes/RootNavigator';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({container: {flex: 1}});
