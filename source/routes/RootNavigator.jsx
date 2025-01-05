import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from '../constants/routeNames';
import AuthFlow from './AuthFlow';
import BottomTabs from './BottomTabs';
import {useState} from 'react';
import {colors} from '../constants/colors';

const RootNavigator = () => {
  const RootNavigatorStack = createNativeStackNavigator();
  const [token, setToken] = useState(true);
  const {AUTH_FLOW, MAIN_FLOW} = routes;
  return (
    <RootNavigatorStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: colors.WHITE},
      }}>
      {token ? (
        <RootNavigatorStack.Screen
          screenOptions={{contentStyle: {backgroundColor: colors.WHITE}}}
          name={MAIN_FLOW}
          component={BottomTabs}
        />
      ) : (
        <RootNavigatorStack.Screen
          screenOptions={{contentStyle: {backgroundColor: colors.WHITE}}}
          name={AUTH_FLOW}
          component={AuthFlow}
        />
      )}
    </RootNavigatorStack.Navigator>
  );
};

export default RootNavigator;
