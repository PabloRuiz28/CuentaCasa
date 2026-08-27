import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text variant="headlineMedium">Unirme a un Hogar</Text>
      <Text variant="bodyLarge" style={{ textAlign: "center" }}>
        Introduce el código de 6 dígitos que te compartió tu cónyuge
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    gap: 8,
    marginVertical: 24,
  },
});
