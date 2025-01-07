import {FlatList, Image, StyleSheet, View, Dimensions} from 'react-native';
import React from 'react';
import fakeImages from '../../utils/fakeImgs';
import {WhiteCarousel} from '../../assets/icons';
import {WhiteReels} from '../../assets/icons';
import {colors} from '../../constants/colors';

const {width, height} = Dimensions.get('window');

const GridPhotoView = () => {
  return (
    <FlatList
      data={fakeImages}
      keyExtractor={item => item.id.toString()}
      numColumns={3}
      nestedScrollEnabled={true}
      renderItem={({item}) => (
        <View style={styles.imageContainer}>
          <Image source={{uri: item.url}} style={styles.image} />

          {/* {item.icon === 'reels' && <WhiteReels color={colors.WHITE} />}
          {item.icon === 'carousel' && <WhiteCarousel />} */}
        </View>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default GridPhotoView;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    margin: 1,
  },
  image: {
    width: width * 0.33,
    height: height * 0.22,
    resizeMode: 'cover',
    position: 'relative',
  },
});
