import { View } from "react-native";
import { Text } from "react-native-paper";

export const Header = () => {
  return (
    <View className="gap-2">
      <Text variant="headlineMedium">Configura tu Hogar</Text>
      <Text variant="bodyLarge">
        Elige cómo deseas comenzar tu experiencia financiera
      </Text>
    </View>
  );
};
