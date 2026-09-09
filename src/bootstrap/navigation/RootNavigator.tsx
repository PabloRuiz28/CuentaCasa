import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import { LoadingScreen } from "@presentation/components/LoadingScreen";
import { MainNavigator } from "./MainNavigator";
import { AuthNavigator } from "./AuthNavigator";
import { useAuth } from "@presentation/context/AuthContext";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const { isAuth, isLoading } = useAuth();

  if (isLoading) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Loading" component={LoadingScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuth ? (
        <Stack.Screen name="MainPattern" component={MainNavigator} />
      ) : (
        <Stack.Screen name="AuthPattern" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};
