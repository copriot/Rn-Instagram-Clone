import {StyleSheet, View} from 'react-native';
import React from 'react';
import Header from '../../components/commons/Header';
import {routes} from '../../constants/routeNames';
import Avatar from '../../components/Avatar/Avatar';
const imgSrc =
  'https://s3-alpha-sig.figma.com/img/260a/cb7f/837eef41ed89178bb8849abaae20e34a?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DvbX-tw2QbNG0GxnKavimh-1c2WTJvtRNSNHoTW29z4WzDmZeDMMpcO-RaxR3pcwrA5Gn2yLqh868LE5OkluSHcw6oZPE8dtELOvmMuEoCDLcj~6mzMrwBA2FDjAVnZvLmfoO9q4T-Zd6tpKrLB5VJ1yWY80gSSZSL1yUoAY7C-A9fzx9DQG2OzCfa4PTA3Y~g8gSFNPwgPYlTpHJahImlUd8wsrvIMvWnSVASKqfiW~ydPTNw4wqi-RBxSdRU9vsA~09oN~FZY3rFMh9AOvl0v6jTw4LA3o-Aid0UuCR5VpfqLJNwnAum0WFJcmLJ8hrpzeyEKkuyDi6n2RFqZe2g__';

const ProfileScreen = () => {
  return (
    <View>
      <Header screenName={routes.PROFILE_SCREEN} isMyProfile={false} />
      <Avatar source={imgSrc} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
