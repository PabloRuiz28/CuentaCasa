import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text variant="headlineLarge">Bienvenido de nuevo</Text>
      <Text variant="titleMedium">
        Controla las finanzas de tu hogar en pareja
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 3,
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 8,
  },
});
