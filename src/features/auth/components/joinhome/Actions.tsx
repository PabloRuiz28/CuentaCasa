import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { useAuth } from "../../context/AuthContext";

export const Actions = () => {
  const { signIn } = useAuth();
  const navigation = useNavigation();

  return (
    <View style={styles.btnsContainer}>
      <Button
        mode="contained"
        style={{ borderRadius: 100 }}
        contentStyle={{ height: 55 }}
        onPress={signIn}
      >
        Unirme al Hogar
      </Button>

      <Button onPress={() => navigation.goBack()}>Regresar</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  btnsContainer: {
    gap: 16,
  },
});
