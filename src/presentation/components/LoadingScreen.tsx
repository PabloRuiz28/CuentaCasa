import { View } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";

export const LoadingScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
      }}
    >
      <ActivityIndicator animating />
      <Text variant="bodyLarge">Cargando...</Text>
    </View>
  );
};
