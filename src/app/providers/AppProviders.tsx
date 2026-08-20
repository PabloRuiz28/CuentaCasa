import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { PaperProvider } from "react-native-paper";
import { AuthProvider } from "../../features/auth/context/AuthContext";

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <PaperProvider>
      <AuthProvider>
        <NavigationContainer>{children}</NavigationContainer>
      </AuthProvider>
    </PaperProvider>
  );
};
