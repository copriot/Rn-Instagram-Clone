import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StoryRing} from './StoryRing';

const Avatar = ({source}) => {
  return (
    <View style={styles.avatar}>
      <StoryRing />
      <Image source={{uri: source}} style={styles.image} />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {width: 75, height: 75, borderRadius: 999, position: 'absolute'},
});
