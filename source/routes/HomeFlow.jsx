import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedPostsScreen from '../screens/HomeFlow/FeedPostScreen';
import ProfileScreen from '../screens/ProfileFlow/ProfileScreen';
import {routes} from '../constants/routeNames';
import {colors} from '../constants/colors';

const HomeFlow = () => {
  const HomeFlowStack = createNativeStackNavigator();
  return (
    <HomeFlowStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: colors.WHITE},
      }}
      initialRouteName={routes.PROFILE_SCREEN}>
      <HomeFlowStack.Screen
        screenOptions={{
          contentStyle: {backgroundColor: colors.WHITE},
        }}
        name={routes.FEED_POSTS_SCREEN}
        component={FeedPostsScreen}
      />
      <HomeFlowStack.Screen
        screenOptions={{
          contentStyle: {backgroundColor: colors.WHITE},
        }}
        name={routes.PROFILE_SCREEN}
        component={ProfileScreen}
      />
    </HomeFlowStack.Navigator>
  );
};
export default HomeFlow;
