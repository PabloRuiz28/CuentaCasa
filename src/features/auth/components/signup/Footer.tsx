import { View } from "react-native";
import { Button, Divider } from "react-native-paper";

type FooterProps = {
  navigate: () => void;
  signIn: () => void;
};

export const Footer = ({ navigate, signIn }: FooterProps) => {
  return (
    <View style={{ gap: 16 }}>
      <Divider />

      <Button
        onPress={signIn}
        style={{ borderRadius: 100, marginTop: 24 }}
        contentStyle={{ height: 55 }}
        mode="contained"
      >
        Crear Hogar
      </Button>

      <Button onPress={navigate}>¿Ya tienes cuenta? Inicia sesión aquí?</Button>
    </View>
  );
};
