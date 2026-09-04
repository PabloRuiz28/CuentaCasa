import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useAuth } from "@presentation/context/AuthContext";
import { FormTextInput } from "@presentation/components/FormTextInput";
import { PrimaryButton } from "@presentation/components/PrimaryButton";

export const Form = () => {
  const { signIn } = useAuth();

  return (
    <View className="flex-1 py-12">
      <View className="gap-4 mb-8">
        <Text variant="bodyMedium">Correo electrónico</Text>
        <FormTextInput
          placeholder="ejemplo@correo.com"
          left={<TextInput.Icon icon="email" />}
        />
      </View>
      <View className="gap-4 mb-8">
        <Text variant="bodyMedium">Contraseña</Text>
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
  forgetPassword: {
    alignSelf: "flex-end",
    marginBottom: 16,
  },
});
