import { View } from "react-native";
import { IconButton, Text } from "react-native-paper";

type ActionButtonProps = {
  icon: string;
  label: string;
  onPress: () => void;
};

export const ActionButton = ({ icon, label, onPress }: ActionButtonProps) => {
  return (
    <View style={{ alignItems: "center", gap: 8 }}>
      <IconButton mode="contained" icon={icon} onPress={onPress} />
      <Text variant="bodyMedium">{label}</Text>
    </View>
  );
};
