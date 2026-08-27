import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useAuth } from "../../context/AuthContext";
import { FormTextInput } from "../../../../shared/components/FormTextInput";
import { PrimaryButton } from "../../../../shared/components/PrimaryButton";

export const Form = () => {
  const { signIn } = useAuth();

  return (
    <View style={styles.form}>
      <View style={{ gap: 8 }}>
        <Text>Correo electrónico</Text>
        <FormTextInput
          placeholder="ejemplo@correo.com"
          left={<TextInput.Icon icon="email" />}
        />
      </View>

      <View style={{ gap: 8 }}>
        <Text>Contraseña</Text>
        <FormTextInput
          secureTextEntry
          placeholder="********"
          left={<TextInput.Icon icon="lock" />}
          right={<TextInput.Icon icon="eye" />}
        />
      </View>

      <Button onPress={() => {}} style={styles.forgetPassword} mode="text">
        ¿Olvidaste tu contraseña?
      </Button>

      <PrimaryButton onPress={signIn}>Iniciar Sesión</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    gap: 32,
    paddingVertical: 16,
  },

  forgetPassword: {
    alignSelf: "flex-end",
  },
});
