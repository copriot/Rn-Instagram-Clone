import {Image, StyleSheet, Text, View} from 'react-native';
import {imgSrc} from './ProfileScreen';
import {colors} from '../../constants/colors';
import Title, {titleTypes} from '../../components/commons/Title';

const SavedIGStories = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 9,
        paddingVertical: 4,
      }}>
      <View
        style={{
          padding: 5,
          borderWidth: 1,
          width: 60,
          height: 60,
          borderRadius: 999,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: colors.CIRCLE_GRAY,
        }}>
        <Image
          style={{width: 55, height: 55, borderRadius: 999}}
          source={{uri: imgSrc}}
        />
      </View>
      <Title
        text={'Text here'}
        theme={titleTypes.TEXT_12_400_14}
        style={{justifyContent: 'center', alignItems: 'center'}}
      />
    </View>
  );
};

export default SavedIGStories;

const styles = StyleSheet.create({});
