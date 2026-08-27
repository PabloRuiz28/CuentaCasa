import { View } from "react-native";
import { Button } from "react-native-paper";
import { PrimaryButton } from "../../../../shared/components/PrimaryButton";

type FooterProps = {
  backNavFn: () => void;
  homeSettingNavFn: () => void;
};

export const Footer = ({ backNavFn, homeSettingNavFn }: FooterProps) => {
  return (
    <View style={{ gap: 16 }}>
      <PrimaryButton
        onPress={homeSettingNavFn}
        style={{ marginTop: 24 }}
      >
        Crear Hogar
      </PrimaryButton>

      <Button onPress={backNavFn}>
        ¿Ya tienes cuenta? Inicia sesión aquí?
      </Button>
    </View>
  );
};
