import { Button } from "react-native-paper";

type FooterProps = {
  backNavFn: () => void;
};

export const Footer = ({ backNavFn }: FooterProps) => {
  return (
    <Button onPress={backNavFn}>¿Ya tienes cuenta? Inicia sesión aquí?</Button>
  );
};
