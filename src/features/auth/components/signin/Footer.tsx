import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

export const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text>¿No tienes cuenta?</Text>
      <Button onPress={() => {}}>Regístrate aquí</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    // backgroundColor: "brown",
  },
});
