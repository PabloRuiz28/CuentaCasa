import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeSettingScreen } from "../../features/auth/screens/HomeSettingScreen";
import { SignInScreen } from "../../features/auth/screens/SignInScreen";
import { SignUpScreen } from "../../features/auth/screens/SignUpScreen";
import { AuthStackParamList } from "./types";
import { NewHomeScreen } from "../../features/auth/screens/NewHomeScreen";
import { JoinHomeScreen } from "../../features/auth/screens/JoinHomeScreen";

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
