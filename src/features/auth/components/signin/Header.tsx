import { View } from "react-native";
import { Text } from "react-native-paper";
import { useResponsive } from "../../../../shared/hooks/useResponsive";

export const Header = () => {
  const { isLandscape } = useResponsive();

  return (
    <View style={{ marginBottom: isLandscape ? 32 : 64, gap: 8 }}>
      <Text variant="headlineMedium">Bienvenido de nuevo</Text>
      <Text variant="bodyLarge">
        Controla las finanzas de tu hogar en pareja
      </Text>
    </View>
  );
};
