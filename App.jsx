import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RootNavigator from './source/routes/RootNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {colors} from './source/constants/colors';
import {LogBox} from 'react-native';

// Bu satırı App.js veya ana dosyanızda ekleyin
LogBox.ignoreLogs([
  'VirtualizedLists should never be nested', // Uyarıyı göz ardı eder
]);
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.WHITE} barStyle="dark-content" />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.WHITE},
});
