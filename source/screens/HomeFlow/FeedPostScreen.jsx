import {Text, View} from 'react-native';
import Header from '../../components/commons/Header';
import {routes} from '../../constants/routeNames';

const FeedPostsScreen = () => {
  return (
    <View>
      <Header screenName={routes.FEED_POSTS_SCREEN} />
      <Text>POST SAYFASI</Text>
    </View>
  );
};

export default FeedPostsScreen;
