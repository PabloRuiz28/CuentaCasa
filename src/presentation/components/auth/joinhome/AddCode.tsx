import { StyleSheet, View } from "react-native";
import { Icon, Surface, Text, TextInput, useTheme } from "react-native-paper";
import { FormTextInput } from "@presentation/components/FormTextInput";

type AddCodeProps = {
  value: string;
  onChangeText: (text: string) => void;
};

export const AddCode = ({ value, onChangeText }: AddCodeProps) => {
  const { colors } = useTheme();

  return (
    <>
      <View style={styles.container}>
        <Text style={{ color: colors.primary }}>Código de invitación</Text>

        <FormTextInput
          placeholder="Ej: HOGAR-880"
          left={<TextInput.Icon icon="key" />}
          value={value}
          onChangeText={onChangeText}
          autoCapitalize="characters"
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
