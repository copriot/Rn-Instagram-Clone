import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {
  AddFeeds,
  ChevronDown,
  ChevronLeft,
  Heart,
  IGLogo,
  Messages,
  Notification,
  Options,
  VerifiedBadge,
} from '../../assets/icons';
import Badge from './Badge';
//import normalize from '../../utils/responsiveFunction';
import Dot from './Dot';
import {routes} from '../../constants/routeNames';
import Title, {titleTypes} from './Title';
import {Drawer} from '../../assets/icons/Drawer';

const Header = ({screenName, isMyProfile}) => {
  return (
    <View style={styles.header}>
      {/* Eger FeedsPost sayfası aciksa  */}

      {screenName === routes.FEED_POSTS_SCREEN ? (
        <View style={styles.leftSide}>
          <IGLogo />
          <ChevronDown />
        </View>
      ) : //Feeds Sayfasi degilse ve Kendi Profil Sayfamda isem girecek kosul
      isMyProfile ? (
        <View style={[styles.leftSide, {alignItems: 'center'}]}>
          <Title text={'Müşkülpesent09'} theme={titleTypes.TEXT_22_700_40} />
          <Badge value={11} />
        </View>
      ) : (
        //Baskasinin Sayfasinda isem girecegi yer
        <ChevronLeft />
      )}
      {/* Profil EKranındaysa ve Başkasının Profili ise girecek koşul */}
      {screenName == routes.PROFILE_SCREEN && isMyProfile == false && (
        <View style={styles.middleBox}>
          <Title text={'username'} theme={titleTypes.TEXT_16_700} />
          <VerifiedBadge />
        </View>
      )}
      {/* Feed EKranındaysa girecek koşul */}
      {screenName === routes.FEED_POSTS_SCREEN ? (
        <View style={styles.rightSide}>
          <Heart />
          <Dot />
          <Messages />
          <Badge value={'10'} customStyle={styles.badge} />
          <AddFeeds />
        </View>
      ) : //Kendi profilimdeysem
      isMyProfile ? (
        <View style={styles.rightSide}>
          <AddFeeds />
          <Drawer />
        </View>
      ) : (
        //Başkasının Profilindeysem
        <View style={styles.rightSide}>
          <Notification />
          <Options />
        </View>
      )}
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
    alignItems: 'center',
  },
  leftSide: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 8,
  },
  rightSide: {
    flexDirection: 'row',
    gap: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {position: 'absolute', left: 64, top: -8, zIndex: 99},
  middleBox: {flexDirection: 'row', alignItems: 'center', gap: 4},
});
