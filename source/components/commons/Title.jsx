import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';

export const titleTypes = {
  TEXT_12_400_18: 'TEXT_12_400_18',
  TEXT_16_700: 'TEXT_16_700',
  TEXT_22_700_40: 'TEXT_22_700_40',
};

const Title = ({theme = 'default', text}) => {
  return <Text style={styles[theme]}>{text}</Text>;
};

export default Title;

export const styles = {
  TEXT_12_400_18: StyleSheet.create({
    color: colors.WHITE,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    alignItems: 'center',
  }),
  TEXT_16_700: StyleSheet.create({
    color: colors.BLACK,
    fontSize: 16,
    fontWeight: '700',
    alignItems: 'center',
  }),
  TEXT_22_700_40: StyleSheet.create({
    color: colors.BLACK,
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 40,
  }),
};
