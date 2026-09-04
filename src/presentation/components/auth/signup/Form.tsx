import { FormTextInput } from "@presentation/components/FormTextInput";
import { PrimaryButton } from "@presentation/components/PrimaryButton";
import { View } from "react-native";
import { Text, TextInput } from "react-native-paper";

export const Form = () => {
  return (
    <View className="flex-1 py-12">
      <View className="flex-row gap-4 mb-8">
        <View className="flex-1 gap-4">
          <Text variant="bodyMedium">Nombre(s)</Text>
          <FormTextInput
            placeholder="Jhon"
            left={<TextInput.Icon icon="account" />}
          />
        </View>

        <View className="flex-1 gap-4">
          <Text variant="bodyMedium">Apellido(s)</Text>
          <FormTextInput
            placeholder="Jhon"
            left={<TextInput.Icon icon="account" />}
          />
        </View>
      </View>

      <View className="gap-4 mb-8">
        <Text variant="bodyMedium">Correo electrónico</Text>
        <FormTextInput
          placeholder="ejemplo@correo.com"
          left={<TextInput.Icon icon="email" />}
        />
      </View>

      <View className="gap-4 mb-16">
        <Text variant="bodyMedium">Contraseña</Text>
        <FormTextInput
          secureTextEntry
          placeholder="************"
          left={<TextInput.Icon icon="lock" />}
          right={<TextInput.Icon icon="eye" />}
        />
      </View>

      <PrimaryButton>Continuar</PrimaryButton>
    </View>
  );
};
