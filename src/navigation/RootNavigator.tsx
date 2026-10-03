import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/splash';
import OnboardingScreen from '../screens/onboarding';
import LoginScreen from '../screens/login';
import SignupScreen from '../screens/signup';
import HomePageScreen from '../screens/homepage';

const Stack = createNativeStackNavigator();
function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="HomePage" component={HomePageScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
