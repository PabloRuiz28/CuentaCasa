import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

type FooterProps = {
  navigate: () => void;
};

export const Footer = ({ navigate }: FooterProps) => {
  return (
    <View style={styles.footer}>
      <Text>¿No tienes cuenta?</Text>
      <Button onPress={navigate}>Regístrate aquí</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
