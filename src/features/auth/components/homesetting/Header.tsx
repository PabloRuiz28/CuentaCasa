import { View } from "react-native";
import { Text } from "react-native-paper";

export const Header = () => {
  return (
    <View style={{ marginBottom: 32, gap: 8 }}>
      <Text variant="headlineMedium">Configura tu Hogar</Text>
      <Text variant="bodyLarge" style={{ marginBottom: 48 }}>
        Elige cómo deseas comenzar tu experiencia financiera
      </Text>
    </View>
  );
};
