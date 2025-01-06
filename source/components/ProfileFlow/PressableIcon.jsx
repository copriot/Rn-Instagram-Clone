import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Frame6} from '../../assets/icons/Frame6';

const PressableIcon = () => {
  return (
    <TouchableOpacity>
      <Frame6 />
    </TouchableOpacity>
  );
};

export default PressableIcon;

const styles = StyleSheet.create({});
