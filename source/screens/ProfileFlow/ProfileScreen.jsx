import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Header from '../../components/commons/Header';
import {routes} from '../../constants/routeNames';
import Avatar from '../../components/Avatar/Avatar';
import ProfileData from '../../components/ProfileFlow/ProfileData';
import Page from '../../components/commons/Page';
import {colors} from '../../constants/colors';
import CustomButtons from '../../components/commons/CustomBottoms/CustomButtons';

const imgSrc =
  'https://s3-alpha-sig.figma.com/img/260a/cb7f/837eef41ed89178bb8849abaae20e34a?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DvbX-tw2QbNG0GxnKavimh-1c2WTJvtRNSNHoTW29z4WzDmZeDMMpcO-RaxR3pcwrA5Gn2yLqh868LE5OkluSHcw6oZPE8dtELOvmMuEoCDLcj~6mzMrwBA2FDjAVnZvLmfoO9q4T-Zd6tpKrLB5VJ1yWY80gSSZSL1yUoAY7C-A9fzx9DQG2OzCfa4PTA3Y~g8gSFNPwgPYlTpHJahImlUd8wsrvIMvWnSVASKqfiW~ydPTNw4wqi-RBxSdRU9vsA~09oN~FZY3rFMh9AOvl0v6jTw4LA3o-Aid0UuCR5VpfqLJNwnAum0WFJcmLJ8hrpzeyEKkuyDi6n2RFqZe2g__';

const ProfileScreen = () => {
  return (
    <View>
      <Header screenName={routes.PROFILE_SCREEN} isMyProfile={true} />

      <Page>
        <View style={styles.userAndProfileInfo}>
          <View style={styles.userProfileData}>
            <Avatar source={imgSrc} />

            <View style={styles.dataBox}>
              <ProfileData value={'1,234'} title={'Posts'} />
              <ProfileData value={'5,678'} title={'Posts'} />
              <ProfileData value={'9,101'} title={'Posts'} />
            </View>
          </View>
          <View>
            <Text style={styles.userName}>Username</Text>
            <Text style={styles.category}>Category/Genre text</Text>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <Text style={styles.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                saepe, vero assumenda ullam est
                <Text style={styles.hashtag}>#hashtag</Text>
              </Text>
            </View>
            <Text style={styles.link}>Link goes here</Text>
          </View>

          <View style={styles.followers}>
            <View style={StyleSheet.friends}>
              <Image
                source={{uri: imgSrc}}
                style={[styles.friendsImg, {zIndex: 3, left: 0}]}
              />
              <Image
                source={{uri: imgSrc}}
                style={[styles.friendsImg, {zIndex: 2, left: 12}]}
              />
              <Image
                source={{uri: imgSrc}}
                style={[styles.friendsImg, {zIndex: 1, left: 24}]}
              />
            </View>
            <View style={styles.followersRight}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.followed}> Followed by</Text>
                <Text style={styles.boldFollowed}> username</Text>
                <Text style={styles.boldFollowed}> username</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.followed}> and</Text>
                <Text style={styles.boldFollowed}> 100 others</Text>
              </View>
            </View>
          </View>
          <CustomButtons title={'Follow'} theme={'primary'} />
          <View>
            <View style={{flexDirection: 'row', gap: 5}}>
              <CustomButtons title={'Message'} theme={'outline'} />
              <CustomButtons title={'Subscribe'} theme={'outline'} />
              <CustomButtons title={'Contact'} theme={'outline'} />
            </View>
          </View>
        </View>
      </Page>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  userProfileData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userAndProfileInfo: {paddingTop: 6, paddingBottom: 10, gap: 12},
  dataBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 24,
  },
  userName: {
    color: colors.BLACK,
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 15.51,
  },
  category: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 15.51,
    color: colors.NEUTRAL,
  },
  description: {
    color: colors.BLACK,
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 16,
  },
  hashtag: {color: colors.HASHTAG},
  link: {
    fontWeight: '700',
    fontSize: 13,
    lineHeight: 16,
    color: colors.HASHTAG,
  },
  friends: {
    flexDirection: 'row',
    width: 54,
    backgroundColor: 'red',
  },
  friendsImg: {
    width: 26,
    height: 26,
    borderRadius: 100,
    borderWidth: 1.5,
    borderColor: colors.WHITE,
    position: 'absolute',
  },
  followers: {
    flexDirection: 'row',
    paddingBottom: 4,
    gap: 54,
  },
  followersRight: {
    flexWrap: 'wrap',
  },
  followed: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 16,
  },
  boldFollowed: {
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 16,
  },
});
