import { useResponsive } from "@presentation/hooks/useResponsive";
import { View } from "react-native";
import { Text } from "react-native-paper";

export const Header = () => {
  const { isLandscape } = useResponsive();
  return (
    <View className={` ${isLandscape ? "items-start" : " items-center"} gap-2`}>
      <Text variant="headlineMedium">Bienvenido de nuevo</Text>
      <Text variant="bodyLarge">
        Controla las finanzas de tu hogar en pareja
      </Text>
    </View>
  );
};
