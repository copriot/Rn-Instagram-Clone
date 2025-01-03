import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';

const Title = ({theme = 'default', text}) => {
  return <Text style={styles[theme]}>{text}</Text>;
};

export default Title;

export const styles = {
  default: StyleSheet.create({
    color: colors.WHITE,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    alignItems: 'center',
  }),
  defaultBlue: StyleSheet.create({
    color: colors.BLUE,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    alignItems: 'center',
  }),
};
