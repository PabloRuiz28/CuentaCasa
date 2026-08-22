import { View } from "react-native";
import { Text } from "react-native-paper";
import { useResponsive } from "../../../../shared/hooks/useResponsive";

export const Header = () => {
  const { isLandscape } = useResponsive();

  return (
    <View
      style={{
        marginBottom: isLandscape ? 0 : 32,
      }}
    >
      <Text variant="headlineLarge">Bienvenido de nuevo</Text>
      <Text variant="titleMedium">
        Controla las finanzas de tu hogar en pareja
      </Text>
    </View>
  );
};
