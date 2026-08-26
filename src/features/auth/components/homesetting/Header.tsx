import { Text, useTheme } from "react-native-paper";

export const Header = () => {
  const { colors } = useTheme();

  return (
    <>
      <Text variant="headlineMedium">Configura tu Hogar</Text>
      <Text
        variant="bodyLarge"
        style={{ color: colors.inverseSurface, marginBottom: 48 }}
      >
        Elige cómo deseas comenzar tu experiencia financiera
      </Text>
    </>
  );
};
