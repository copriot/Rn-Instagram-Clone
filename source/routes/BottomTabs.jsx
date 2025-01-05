import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeFlow from './HomeFlow';
import SearchScreen from '../screens/SearchFlow/SearchScreen';
import {routes} from '../constants/routeNames';
import ProfileScreen from '../screens/ProfileFlow/ProfileScreen';
import ReelsScreen from '../screens/ReelsFlow/ReelsScreen';
import MarketsScreen from '../screens/MarketsFlow/MarketsScreen';
import {colors} from '../constants/colors';
const BottomTabs = () => {
  const BottomTabsNavigator = createBottomTabNavigator();
  return (
    <BottomTabsNavigator.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: colors.WHITE},
      }}>
      <BottomTabsNavigator.Screen
        screenOptions={{contentStyle: {backgroundColor: colors.WHITE}}}
        name={routes.HOME_FLOW}
        component={HomeFlow}
      />
      <BottomTabsNavigator.Screen
        screenOptions={{contentStyle: {backgroundColor: colors.WHITE}}}
        name={routes.SEARCH_FLOW}
        component={SearchScreen}
      />
      <BottomTabsNavigator.Screen
        screenOptions={{
          contentStyle: {backgroundColor: colors.WHITE},
        }}
        name={routes.MARKETS_FLOW}
        component={MarketsScreen}
      />

      <BottomTabsNavigator.Screen
        screenOptions={{
          contentStyle: {backgroundColor: colors.WHITE},
        }}
        name={routes.REELS_FLOW}
        component={ReelsScreen}
      />
      <BottomTabsNavigator.Screen
        screenOptions={{
          contentStyle: {backgroundColor: colors.WHITE},
        }}
        name={routes.PROFILE_LOW}
        component={ProfileScreen}
      />
    </BottomTabsNavigator.Navigator>
  );
};

export default BottomTabs;
