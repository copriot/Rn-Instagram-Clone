import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';
import Title from './Title';

const Badge = () => {
  return (
    <View style={styles.badge}>
      <Title text="10+" />
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  badge: {
    backgroundColor: colors.RED,
    borderRadius: 10,
    paddingHorizontal: 4,
    height: 18,
    gap: 10,
  },
  badgeText: {
    color: colors.WHITE,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    alignItems: 'center',
  },
});
