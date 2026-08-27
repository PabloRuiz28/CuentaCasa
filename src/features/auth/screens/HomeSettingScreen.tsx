import { useState } from "react";
import { ScrollView, View } from "react-native";
import { Screen } from "../../../shared/components/Screen";
import { useResponsiveContentStyle } from "../../../shared/hooks/useResponsive";
import { Header } from "../components/homesetting/Header";
import { OptionCard } from "../components/homesetting/OptionCard";
import { HOME_OPTIONS } from "../constants";
import { IHomeSetting } from "../types";
import { AuthScreenProps } from "../../../app/navigation/types";
import { PrimaryButton } from "../../../shared/components/PrimaryButton";

export const HomeSettingScreen = ({
  navigation,
}: AuthScreenProps<"HomeSetting">) => {
  const { width, maxHeight, margin } = useResponsiveContentStyle();

  const [settingSelected, setSettingSelected] = useState<IHomeSetting>(
    HOME_OPTIONS[0],
  );

  const navigateTo = () => {
    if (settingSelected.homeType === "NEW") {
      navigation.navigate("NewHome");
    } else {
      navigation.navigate("JoinHome");
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

        <PrimaryButton onPress={navigateTo} style={{ marginTop: 64 }}>
          Continuar
        </PrimaryButton>
      </ScrollView>
    </Screen>
  );
};
