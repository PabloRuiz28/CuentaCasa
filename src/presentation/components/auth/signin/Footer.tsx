import { View } from "react-native";
import { Button, Text } from "react-native-paper";

type FooterProps = {
  navigate: () => void;
};

export const Footer = ({ navigate }: FooterProps) => {
  return (
    <View className="flex-row items-center justify-center">
      <Text variant="bodyMedium">¿No tienes cuenta?</Text>
      <Button onPress={navigate}>Regístrate aquí</Button>
    </View>
  );
};
