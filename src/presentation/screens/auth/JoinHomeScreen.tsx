import { View } from "react-native";
import { Screen } from "@presentation/components/Screen";
import { useResponsiveContentStyle } from "@presentation/hooks/useResponsive";
import { Actions } from "@presentation/components/auth/joinhome/Actions";
import { AddCode } from "@presentation/components/auth/joinhome/AddCode";
import { Header } from "@presentation/components/auth/joinhome/Header";

export const JoinHomeScreen = () => {
  const { width, maxHeight, margin } = useResponsiveContentStyle();
  return (
    <Screen
      contentStyle={{
        width: width,
        maxHeight: maxHeight,
        margin: margin,
        justifyContent: "space-between",
      }}
    >
      <View style={{ gap: 16 }}>
        <Header />

        <AddCode />
      </View>

      <Actions />
    </Screen>
  );
};
