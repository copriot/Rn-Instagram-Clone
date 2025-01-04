import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';

const Dot = ({customStyle}) => {
  return <View style={[styles.box, customStyle]} />;
};

export default Dot;

const styles = StyleSheet.create({
  box: {
    width: 10,
    height: 10,
    backgroundColor: colors.RED,
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: colors.WHITE,
    position: 'absolute',
    left: 19,
    top: -1,
  },
});
