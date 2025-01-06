import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';
import {fontSizes} from '../../constants/fontSize';

export const titleTypes = {
  TEXT_22_700_40: 'TEXT_22_700_40',
  TEXT_16_700: 'TEXT_16_700',
  TEXT_14_700_18: 'TEXT_14_700_18',
  TEXT_14_400_18: 'TEXT_14_400_18',
  TEXT_12_400_18: 'TEXT_12_400_18',
  TEXT_12_400_14: 'TEXT_12_400_14',
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
  TEXT_12_400_14: StyleSheet.create({
    color: colors.BLACK,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14,
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
  TEXT_14_700_18: StyleSheet.create({
    color: colors.BLACK,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 18,
  }),
  TEXT_14_400_18: StyleSheet.create({
    color: colors.BLACK,
    fontSizes: 14,
    fontWeight: '400',
    lineHeight: 18,
  }),
};
