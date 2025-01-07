import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeFlow from './HomeFlow';
import SearchScreen from '../screens/SearchFlow/SearchScreen';
import {routes} from '../constants/routeNames';
import ProfileScreen from '../screens/ProfileFlow/ProfileScreen';
import ReelsScreen from '../screens/ReelsFlow/ReelsScreen';
import MarketsScreen from '../screens/MarketsFlow/MarketsScreen';
import {colors} from '../constants/colors';
import {Home} from '../assets/icons/Home';
import {Search} from '../assets/icons/Search';
import {Reels} from '../assets/icons/Reels';
import {Shop} from '../assets/icons/Shop';
const BottomTabs = () => {
  const BottomTabsNavigator = createBottomTabNavigator();
  return (
    <BottomTabsNavigator.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: colors.WHITE},
      }}>
      <BottomTabsNavigator.Screen
        name="Home"
        component={HomeFlow}
        options={{
          tabBarIcon: ({color, size}) => <Home width={28} height={28} />,
        }}
      />
      <BottomTabsNavigator.Screen
        screenOptions={{contentStyle: {backgroundColor: colors.WHITE}}}
        name={routes.SEARCH_FLOW}
        component={SearchScreen}
        options={{
          tabBarIcon: () => <Search width={28} height={28} />,
        }}
      />
      <BottomTabsNavigator.Screen
        screenOptions={{
          contentStyle: {backgroundColor: colors.WHITE},
        }}
        name={routes.MARKETS_FLOW}
        component={MarketsScreen}
        options={{
          tabBarIcon: () => <Shop width={28} height={28} />,
        }}
      />

      <BottomTabsNavigator.Screen
        screenOptions={{
          contentStyle: {backgroundColor: colors.WHITE},
        }}
        name={routes.REELS_FLOW}
        component={ReelsScreen}
        options={{
          tabBarIcon: () => <Reels width={28} height={28} />,
        }}
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
