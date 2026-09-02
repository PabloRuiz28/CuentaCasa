import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  HomeSetting: undefined;
  NewHome: undefined;
  JoinHome: undefined;
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

export type AuthScreenProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
