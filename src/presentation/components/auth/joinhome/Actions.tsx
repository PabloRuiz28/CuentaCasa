import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { useAuth } from "@presentation/context/AuthContext";
import { useAuthNavigation } from "@bootstrap/navigation/hooks";
import { PrimaryButton } from "@presentation/components/PrimaryButton";

export const Actions = () => {
  const { signIn } = useAuth();
  const navigation = useAuthNavigation();

  return (
    <View style={styles.btnsContainer}>
      <PrimaryButton onPress={signIn}>Unirme al Hogar</PrimaryButton>

      <Button onPress={() => navigation.goBack()}>Regresar</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  btnsContainer: {
    gap: 16,
  },
});
