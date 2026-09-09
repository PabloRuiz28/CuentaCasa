import { useState } from "react";
import { ScrollView, View } from "react-native";
import { Screen } from "@presentation/components/Screen";
import { useResponsiveContentStyle } from "@presentation/hooks/useResponsive";
import { Header } from "@presentation/components/auth/homesetting/Header";
import { OptionCard } from "@presentation/components/auth/homesetting/OptionCard";
import { HOME_OPTIONS, IHomeSetting } from "@core/constants/homeOptions";
import { AuthScreenProps } from "@bootstrap/navigation/types";
import { PrimaryButton } from "@presentation/components/PrimaryButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const HomeSettingScreen = ({
  navigation,
}: AuthScreenProps<"HomeSetting">) => {
  const { width, maxHeight, margin } = useResponsiveContentStyle();
  const insets = useSafeAreaInsets();

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
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View
          className="flex-1 justify-between"
          style={{ paddingBottom: insets.bottom }}
        >
          <View className="gap-8">
            <Header />
            {HOME_OPTIONS.map((setting) => (
              <OptionCard
                key={setting.homeType}
                setting={setting}
                isSelected={setting.homeType === settingSelected.homeType}
                onSelect={setSettingSelected}
              />
            ))}
          </View>
          <PrimaryButton onPress={navigateTo}>Continuar</PrimaryButton>
        </View>
      </ScrollView>
    </Screen>
  );
};
