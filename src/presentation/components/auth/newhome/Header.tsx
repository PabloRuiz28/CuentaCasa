import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <LottieView
        style={{ width: 150, height: 150 }}
        autoPlay
        loop
        source={require("../../../../../assets/lottie/success.json")}
      />

      <Text variant="headlineMedium">¡Hogar creado con éxito!</Text>
      <Text variant="bodyLarge">
        Comparte este código con tu cónyuge para unirse
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    gap: 8,
  },
});
