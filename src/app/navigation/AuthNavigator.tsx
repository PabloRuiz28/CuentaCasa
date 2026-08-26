import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeSettingScreen } from "../../features/auth/screens/HomeSettingScreen";
import { SignInScreen } from "../../features/auth/screens/SignInScreen";
import { SignUpScreen } from "../../features/auth/screens/SignUpScreen";
import { AuthStackParamList } from "./types";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="HomeSetting" component={HomeSettingScreen} />
    </Stack.Navigator>
  );
};
