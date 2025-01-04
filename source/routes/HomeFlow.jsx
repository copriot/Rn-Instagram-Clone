import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedPostsScreen from '../screens/HomeFlow/FeedPostScreen';
import ProfileScreen from '../screens/ProfileFlow/ProfileScreen';
import {routes} from '../constants/routeNames';

const HomeFlow = () => {
  const HomeFlowStack = createNativeStackNavigator();
  return (
    <HomeFlowStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={routes.PROFILE_SCREEN}>
      <HomeFlowStack.Screen
        name={routes.FEED_POSTS_SCREEN}
        component={FeedPostsScreen}
      />
      <HomeFlowStack.Screen
        name={routes.PROFILE_SCREEN}
        component={ProfileScreen}
      />
    </HomeFlowStack.Navigator>
  );
};
export default HomeFlow;
