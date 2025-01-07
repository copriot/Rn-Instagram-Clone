import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Grid} from '../../assets/icons/Grid';
import {Reels} from '../../assets/icons/Reels';
import {Mentions} from '../../assets/icons/Mentions';
import normalize from '../../utils/responsiveFunction';

const TabNaviBar = () => {
  const [focusedTab, setFocusedTab] = useState('Grid');

  return (
    <View style={styles.container}>
      {/* Grid */}
      <TouchableOpacity onPress={() => setFocusedTab('Grid')}>
        <Grid isFocused={focusedTab === 'Grid'} />
      </TouchableOpacity>

      {/* Reels */}
      <TouchableOpacity onPress={() => setFocusedTab('Reels')}>
        <Reels isFocused={focusedTab === 'Reels'} />
      </TouchableOpacity>

      {/* Mentions */}
      <TouchableOpacity onPress={() => setFocusedTab('Mentions')}>
        <Mentions isFocused={focusedTab === 'Mentions'} />
      </TouchableOpacity>
    </View>
  );
};

export default TabNaviBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: normalize(50),
    paddingVertical: 10,
  },
});
