import * as Clipboard from "expo-clipboard";
import { StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { ActionButton } from "./ActionButton";

type SharedHomeCodeProps = {
  homeCode: string;
};

export const SharedHomeCode = ({ homeCode }: SharedHomeCodeProps) => {
  const { colors } = useTheme();

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(homeCode);
  };

  return (
    <View
      style={[
        styles.surface,
        {
          borderColor: colors.outlineVariant,
        },
      ]}
    >
      <Text variant="bodyMedium" style={{ marginBottom: 16 }}>
        Código de Invitación
      </Text>

      <Text variant="headlineLarge" style={{ color: colors.primary }}>
        {homeCode}
      </Text>

      <View style={{ flexDirection: "row", gap: 16, marginVertical: 16 }}>
        <ActionButton
          icon="share-variant-outline"
          label="Compartir"
          onPress={copyToClipboard}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  surface: {
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 32,
    alignItems: "center",
  },
});
