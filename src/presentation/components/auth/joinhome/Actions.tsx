import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { useAuthNavigation } from "@bootstrap/navigation/hooks";
import { PrimaryButton } from "@presentation/components/PrimaryButton";

type ActionsProps = {
  onJoin: () => void;
  isLoading: boolean;
};

export const Actions = ({ onJoin, isLoading }: ActionsProps) => {
  const navigation = useAuthNavigation();

  return (
    <View style={styles.btnsContainer}>
      <PrimaryButton onPress={onJoin} loading={isLoading}>
        Unirme al Hogar
      </PrimaryButton>

      <Button onPress={() => navigation.goBack()}>Regresar</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  btnsContainer: {
    gap: 16,
  },
});
