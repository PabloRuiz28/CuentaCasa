import { NavigationContainer } from "@react-navigation/native";
import React, { useMemo } from "react";
import { useColorScheme } from "react-native";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { PaperProvider } from "react-native-paper";
import { AuthProvider } from "../../features/auth/context/AuthContext";
import {
  darkTheme,
  lightTheme,
  navigationDarkTheme,
  navigationLightTheme,
} from "../../shared/theme/theme";

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const paperTheme = useMemo(() => (isDark ? darkTheme : lightTheme), [isDark]);
  const navTheme = useMemo(
    () => (isDark ? navigationDarkTheme : navigationLightTheme),
    [isDark],
  );

  return (
    <PaperProvider theme={paperTheme}>
      <KeyboardProvider
        statusBarTranslucent
        navigationBarTranslucent
        preserveEdgeToEdge
      >
        <AuthProvider>
          <NavigationContainer theme={navTheme}>{children}</NavigationContainer>
        </AuthProvider>
      </KeyboardProvider>
    </PaperProvider>
  );
};
