import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  AddFeeds,
  ChevronDown,
  Heart,
  IGLogo,
  Messages,
} from '../../assets/icons';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.leftSide}>
        <IGLogo />
        <ChevronDown />
      </View>
      <View style={styles.rightSide}>
        <Heart />
        <Messages />
        <AddFeeds />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 13,
  },
  leftSide: {flexDirection: 'row', gap: 8},
  rightSide: {flexDirection: 'row', gap: 24},
});
