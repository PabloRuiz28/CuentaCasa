import { NavigatorScreenParams } from "@react-navigation/native";

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  HomeSetting: undefined;
};

export type MainTabParamList = {
  Dashboard: undefined;
  Settings: undefined;
};

export type MainStackParamList = {
  MainTabs: NavigatorScreenParams<MainTabParamList>;
};

export type RootStackParamList = {
  Loading: undefined;
  AuthPattern: NavigatorScreenParams<AuthStackParamList>;
  MainPattern: NavigatorScreenParams<MainStackParamList>;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
