import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from '../constants/routeNames';
import AuthFlow from './AuthFlow';
import BottomTabs from './BottomTabs';
import {useState} from 'react';

const RootNavigator = () => {
  const RootNavigatorStack = createNativeStackNavigator();
  const [token, setToken] = useState(true);
  const {AUTH_FLOW, MAIN_FLOW} = routes;
  return (
    <RootNavigatorStack.Navigator screenOptions={{headerShown: false}}>
      {token ? (
        <RootNavigatorStack.Screen name={MAIN_FLOW} component={BottomTabs} />
      ) : (
        <RootNavigatorStack.Screen name={AUTH_FLOW} component={AuthFlow} />
      )}
    </RootNavigatorStack.Navigator>
  );
};

export default RootNavigator;
