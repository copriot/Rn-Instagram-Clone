import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedPostsScreen from '../screens/HomeFlow/FeedPostScreen';
import ProfileScreen from '../screens/ProfileFlow/ProfileScreen';

const HomeFlow = () => {
  const HomeFlowStack = createNativeStackNavigator();
  return (
    <HomeFlowStack.Navigator>
      <HomeFlowStack.Screen
        name="FeedPostsScreen"
        component={FeedPostsScreen}
      />
      <HomeFlowStack.Screen name="ProfileScreen" component={ProfileScreen} />
    </HomeFlowStack.Navigator>
  );
};
export default HomeFlow;
