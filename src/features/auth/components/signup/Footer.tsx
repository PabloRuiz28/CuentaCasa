import { View } from "react-native";
import { Button, Divider } from "react-native-paper";

type FooterProps = {
  backNavFn: () => void;
  homeSettingNavFn: () => void;
};

export const Footer = ({ backNavFn, homeSettingNavFn }: FooterProps) => {
  return (
    <View style={{ gap: 16 }}>
      <Divider />

      <Button
        onPress={homeSettingNavFn}
        style={{ borderRadius: 100, marginTop: 24 }}
        contentStyle={{ height: 55 }}
        mode="contained"
      >
        Crear Hogar
      </Button>

      <Button onPress={backNavFn}>
        ¿Ya tienes cuenta? Inicia sesión aquí?
      </Button>
    </View>
  );
};
