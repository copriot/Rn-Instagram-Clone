import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from '../constants/routeNames';
import SignInScreen from '../screens/AuthFlow/SignInScreen';
import SignUpScreen from '../screens/AuthFlow/SignUpScreen';

const AuthFlow = () => {
  const AuthFlowStack = createNativeStackNavigator();
  return (
    <AuthFlowStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: colors.WHITE},
      }}>
      <AuthFlowStack.Screen
        screenOptions={{contentStyle: {backgroundColor: colors.WHITE}}}
        name={routes.SIGN_IN}
        component={SignInScreen}
      />
      <AuthFlowStack.Screen
        screenOptions={{contentStyle: {backgroundColor: colors.WHITE}}}
        name={routes.SIGN_UP}
        component={SignUpScreen}
      />
    </AuthFlowStack.Navigator>
  );
};

export default AuthFlow;
