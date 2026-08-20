import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "./types";
import { SignInScreen } from "../../features/auth/screens/SignInScreen";
import { SignUpScreen } from "../../features/auth/screens/SignUpScreen";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerTitle: "Inicio de sesión" }}
        name="SignIn"
        component={SignInScreen}
      />
      <Stack.Screen
        options={{ headerTitle: "Crear cuenta" }}
        name="SignUp"
        component={SignUpScreen}
      />
    </Stack.Navigator>
  );
};
