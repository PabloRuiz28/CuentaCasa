import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useAuth } from "../context/AuthContext";

export const SignInScreen = () => {
  const { signIn } = useAuth();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
      }}
    >
      <Text>SignInScreen</Text>

      <Button onPress={signIn}>Tabs</Button>
    </View>
  );
};
