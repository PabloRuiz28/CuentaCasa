import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainStackParamList, MainTabParamList } from "./types";
import { DashboardScreen } from "../../features/dashboard/screens/DashboardScreen";
import { SettingsScreen } from "../../features/settings/screens/SettingsScreen";
import { createNativeBottomTabNavigator } from "@react-navigation/bottom-tabs/unstable";

const Stack = createNativeStackNavigator<MainStackParamList>();
const Tab = createNativeBottomTabNavigator<MainTabParamList>();

const MainTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: {
            type: "image",
            source: require("../../../assets/icons/dashboard.png"),
          },
        }}
        name="Dashboard"
        component={DashboardScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: {
            type: "image",
            source: require("../../../assets/icons/settings.png"),
          },
        }}
        name="Settings"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};

export const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={MainTabs} />
    </Stack.Navigator>
  );
};
