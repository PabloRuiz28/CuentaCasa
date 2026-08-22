import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { PaperProvider } from "react-native-paper";
import { AuthProvider } from "../../features/auth/context/AuthContext";
import { KeyboardProvider } from "react-native-keyboard-controller";

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <PaperProvider>
      <KeyboardProvider>
        <AuthProvider>
          <NavigationContainer>{children}</NavigationContainer>
        </AuthProvider>
      </KeyboardProvider>
    </PaperProvider>
  );
};
