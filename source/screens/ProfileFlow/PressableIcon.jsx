import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Frame6} from '../../assets/icons/Frame6';
import {colors} from '../../constants/colors';

const PressableIcon = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Frame6 />
    </TouchableOpacity>
  );
};

export default PressableIcon;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.GRAY,
    padding: 7,
    borderRadius: 3,
    width: 32,
  },
});
