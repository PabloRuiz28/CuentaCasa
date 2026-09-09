import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";
import { useAuth } from "@presentation/context/AuthContext";
import { FormTextInput } from "@presentation/components/FormTextInput";
import { PrimaryButton } from "@presentation/components/PrimaryButton";

export const Form = () => {
  const { signIn } = useAuth();
  const { colors } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await signIn(email, password);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error al iniciar sesión");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="flex-1 py-12">
      <View className="gap-4 mb-8">
        <Text variant="bodyMedium">Correo electrónico</Text>
        <FormTextInput
          placeholder="ejemplo@correo.com"
          left={<TextInput.Icon icon="email" />}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </View>
      <View className="gap-4 mb-8">
        <Text variant="bodyMedium">Contraseña</Text>
        <FormTextInput
          secureTextEntry
          placeholder="********"
          left={<TextInput.Icon icon="lock" />}
          right={<TextInput.Icon icon="eye" />}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {error ? (
        <Text
          variant="bodySmall"
          style={{ color: colors.error, marginBottom: 8 }}
        >
          {error}
        </Text>
      ) : null}

      <Button onPress={() => {}} style={styles.forgetPassword} mode="text">
        ¿Olvidaste tu contraseña?
      </Button>

      <PrimaryButton onPress={handleSubmit} loading={isLoading}>
        Iniciar Sesión
      </PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  forgetPassword: {
    alignSelf: "flex-end",
    marginBottom: 16,
  },
});
