import { View } from "react-native";
import { Button, PaperProvider, Text } from "react-native-paper";

export const AppProviders = () => {
  return (
    <PaperProvider>
      <View>
        <Text>Hola Mundo - React Native Paper</Text>

        <Button mode="contained">Click me!</Button>
      </View>
    </PaperProvider>
  );
};
