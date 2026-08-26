import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useAuth } from "../../context/AuthContext";

export const Form = () => {
  const { signIn } = useAuth();

  return (
    <View style={styles.form}>
      <View style={{ gap: 8 }}>
        <Text>Correo electrónico</Text>
        <TextInput
          mode="outlined"
          placeholder="ejemplo@correo.com"
          style={{ height: 65 }}
          outlineStyle={{ borderRadius: 20 }}
          left={<TextInput.Icon icon="email" />}
        />
      </View>

      <View style={{ gap: 8 }}>
        <Text>Contraseña</Text>
        <TextInput
          mode="outlined"
          secureTextEntry
          placeholder="********"
          style={{ height: 65 }}
          outlineStyle={{ borderRadius: 20 }}
          left={<TextInput.Icon icon="lock" />}
          right={<TextInput.Icon icon="eye" />}
        />
      </View>

      <Button onPress={() => {}} style={styles.forgetPassword} mode="text">
        ¿Olvidaste tu contraseña?
      </Button>

      <Button
        style={{ borderRadius: 100 }}
        contentStyle={{ height: 55 }}
        onPress={signIn}
        mode="contained"
      >
        Iniciar Sesión
      </Button>
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
