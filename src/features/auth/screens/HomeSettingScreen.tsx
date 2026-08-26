import { useState } from "react";
import { Button } from "react-native-paper";
import { Screen } from "../../../shared/components/Screen";
import { Header } from "../components/homesetting/Header";
import { OptionCard } from "../components/homesetting/OptionCard";
import { HOME_OPTIONS } from "../constants";
import { IHomeSetting } from "../types";
import { useResponsive } from "../../../shared/hooks/useResponsive";
import { ScrollView, View } from "react-native";

export const HomeSettingScreen = () => {
  const { isTablet, isLandscape } = useResponsive();

  const [settingSelected, setSettingSelected] = useState<IHomeSetting>(
    HOME_OPTIONS[0],
  );

  return (
    <Screen
      contentStyle={{
        width: isLandscape ? "60%" : isTablet ? "80%" : "100%",
        maxHeight: isLandscape ? "100%" : isTablet ? "70%" : "auto",
        margin: "auto",
      }}
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
