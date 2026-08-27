import { StyleSheet, View } from "react-native";
import { Icon, Surface, Text, TextInput, useTheme } from "react-native-paper";

export const AddCode = () => {
  const { colors } = useTheme();

  return (
    <>
      <View style={styles.container}>
        <Text style={{ color: colors.primary }}>Código de invitación</Text>

        <TextInput
          mode="outlined"
          placeholder="Ej: HOGAR-880"
          style={{ height: 65 }}
          outlineStyle={{ borderRadius: 20 }}
          left={<TextInput.Icon icon="key" />}
        />
      </View>

      <Surface mode="flat" style={styles.surface}>
        <Icon source="information-outline" size={24} />
        <Text variant="bodyMedium" style={{ flex: 1 }}>
          Al unirte, compartirán la misma información financiera y el control de
          los gastos del hogar.
        </Text>
      </Surface>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
    marginBottom: 24,
  },

  surface: {
    flexDirection: "row",
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 16,
    gap: 16,
  },
});
