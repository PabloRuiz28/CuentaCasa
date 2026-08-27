import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { Button } from "react-native-paper";
import { Screen } from "../../../shared/components/Screen";
import { useResponsiveContentStyle } from "../../../shared/hooks/useResponsive";
import { Header } from "../components/homesetting/Header";
import { OptionCard } from "../components/homesetting/OptionCard";
import { HOME_OPTIONS } from "../constants";
import { IHomeSetting } from "../types";

export const HomeSettingScreen = () => {
  const navigation = useNavigation();
  const { width, maxHeight, margin } = useResponsiveContentStyle();

  const [settingSelected, setSettingSelected] = useState<IHomeSetting>(
    HOME_OPTIONS[0],
  );

  const navigateTo = () => {
    if (settingSelected.homeType === "NEW") {
      navigation.navigate("AuthPattern", { screen: "NewHome" });
    } else {
      throw new Error("Screen not implement");
    }
  };

  return (
    <Screen
      contentStyle={{ width: width, maxHeight: maxHeight, margin: margin }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />

        <View style={{ gap: 32 }}>
          {HOME_OPTIONS.map((setting) => (
            <OptionCard
              key={setting.homeType}
              setting={setting}
              isSelected={setting.homeType === settingSelected.homeType}
              onSelect={setSettingSelected}
            />
          ))}
        </View>

        <Button
          onPress={navigateTo}
          style={{ borderRadius: 100, marginTop: 64 }}
          contentStyle={{ height: 55 }}
          mode="contained"
        >
          Continuar
        </Button>
      </ScrollView>
    </Screen>
  );
};
