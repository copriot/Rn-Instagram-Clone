import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';
import Title, {titleTypes} from './Title';

const Badge = ({value, customStyle}) => {
  return (
    <View style={[styles.badge, customStyle]}>
      <Title
        theme={titleTypes.TEXT_12_400_18}
        text={`${value}${value > 10 ? '+' : ''}`}
      />
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  badge: {
    backgroundColor: colors.RED,
    borderRadius: 99,
    paddingHorizontal: 4,
    height: 18,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
