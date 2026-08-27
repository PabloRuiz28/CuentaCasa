import { View } from "react-native";
import { Screen } from "../../../shared/components/Screen";
import { useResponsiveContentStyle } from "../../../shared/hooks/useResponsive";
import { Actions } from "../components/joinhome/Actions";
import { AddCode } from "../components/joinhome/AddCode";
import { Header } from "../components/joinhome/Header";

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
