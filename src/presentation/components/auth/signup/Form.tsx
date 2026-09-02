import { StyleSheet, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { FormTextInput } from "@presentation/components/FormTextInput";

export const Form = () => {
  return (
    <>
      <View style={{ flexDirection: "row", gap: 16, marginBottom: 24 }}>
        <View style={[styles.inputContainer, { flex: 1 }]}>
          <Text variant="bodySmall">Nombre(s)</Text>
          <FormTextInput
            placeholder="Jhon"
            left={<TextInput.Icon icon="account" />}
          />
        </View>

        <View style={[styles.inputContainer, { flex: 1 }]}>
          <Text variant="bodySmall">Apellido(s)</Text>
          <FormTextInput
            placeholder="Doe"
            left={<TextInput.Icon icon="account" />}
          />
        </View>
      </View>

      <View style={[styles.inputContainer, { marginBottom: 24 }]}>
        <Text>Correo electrónico</Text>
        <FormTextInput
          placeholder="ejemplo@correo.com"
          left={<TextInput.Icon icon="email" />}
        />
      </View>

      <View style={[styles.inputContainer, { marginBottom: 24 }]}>
        <Text>Contraseña</Text>
        <FormTextInput
          secureTextEntry
          placeholder="************"
          left={<TextInput.Icon icon="lock" />}
          right={<TextInput.Icon icon="eye" />}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    gap: 12,
  },
});
