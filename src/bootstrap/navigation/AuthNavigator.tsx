import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeSettingScreen } from "@presentation/screens/auth/HomeSettingScreen";
import { SignInScreen } from "@presentation/screens/auth/SignInScreen";
import { SignUpScreen } from "@presentation/screens/auth/SignUpScreen";
import { AuthStackParamList } from "./types";
import { NewHomeScreen } from "@presentation/screens/auth/NewHomeScreen";
import { JoinHomeScreen } from "@presentation/screens/auth/JoinHomeScreen";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="HomeSetting" component={HomeSettingScreen} />
      <Stack.Screen name="NewHome" component={NewHomeScreen} />
      <Stack.Screen name="JoinHome" component={JoinHomeScreen} />
    </Stack.Navigator>
  );
};
