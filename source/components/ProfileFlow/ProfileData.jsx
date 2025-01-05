import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Title, {titleTypes} from '../commons/Title';

const ProfileData = ({title, value}) => {
  return (
    <View>
      <Title text={value} theme={titleTypes.TEXT_14_700_18} />
      <Title text={title} theme={titleTypes.TEXT_14_400_18} />
    </View>
  );
};

export default ProfileData;

const styles = StyleSheet.create({});
