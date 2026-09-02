import { useState } from "react";
import { ScrollView, View } from "react-native";
import { Screen } from "@presentation/components/Screen";
import { useResponsiveContentStyle } from "@presentation/hooks/useResponsive";
import { Header } from "@presentation/components/auth/homesetting/Header";
import { OptionCard } from "@presentation/components/auth/homesetting/OptionCard";
import { HOME_OPTIONS, IHomeSetting } from "@core/constants/homeOptions";
import { AuthScreenProps } from "@bootstrap/navigation/types";
import { PrimaryButton } from "@presentation/components/PrimaryButton";

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
