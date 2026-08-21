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
          outlineStyle={{ height: 65, borderRadius: 20 }}
          left={
            <TextInput.Icon
              icon={require("../../../../../assets/icons/alternate_email.png")}
            />
          }
        />
      </View>

      <View style={{ gap: 8 }}>
        <Text>Contraseña</Text>
        <TextInput
          mode="outlined"
          secureTextEntry
          placeholder="********"
          outlineStyle={{ height: 65, borderRadius: 20 }}
          left={
            <TextInput.Icon
              icon={require("../../../../../assets/icons/lock.png")}
            />
          }
          right={
            <TextInput.Icon
              icon={require("../../../../../assets/icons/visibility.png")}
            />
          }
        />
      </View>

      <Button onPress={() => {}} style={styles.forgetPassword} mode="text">
        ¿Olvidaste tu contraseña?
      </Button>

      <Button onPress={signIn} mode="contained">
        Iniciar Sesión
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 5,
    gap: 32,
    // backgroundColor: "yellow",
  },

  forgetPassword: {
    alignSelf: "flex-end",
  },
});
