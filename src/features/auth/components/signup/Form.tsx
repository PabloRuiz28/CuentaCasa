import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Chip, Icon, Text, TextInput, useTheme } from "react-native-paper";
import { FormTextInput } from "../../../../shared/components/FormTextInput";
import { Frecuencia } from "../../types";

export const Form = () => {
  const { colors } = useTheme();
  const aportes: Frecuencia[] = ["Semanal", "Catorcenal", "Quincenal"];
  const [aporteSeleccionado, setAporteSeleccionado] =
    useState<Frecuencia>("Semanal");

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

      <View style={[styles.inputContainer, { marginBottom: 24 }]}>
        <Text>Monto base incial</Text>
        <FormTextInput
          inputMode="numeric"
          placeholder="$0.00"
          left={<TextInput.Icon icon="cash" />}
        />
      </View>

      <View style={[styles.inputContainer, { marginBottom: 24 }]}>
        <Text>Frecuencia de aporte</Text>
        <View style={{ flexDirection: "row", gap: 8 }}>
          {aportes.map((aporte) => (
            <Chip
              icon={() =>
                aporte === aporteSeleccionado ? (
                  <Icon source="check" size={16} color={colors.primary} />
                ) : null
              }
              style={{
                backgroundColor:
                  aporte === aporteSeleccionado
                    ? colors.primaryContainer
                    : "transparent",
                borderColor:
                  aporte === aporteSeleccionado
                    ? "transparent"
                    : colors.outlineVariant,
              }}
              textStyle={{
                color:
                  aporte === aporteSeleccionado
                    ? colors.primary
                    : colors.onSurfaceVariant,
              }}
              selected={aporte === aporteSeleccionado}
              onPress={() => setAporteSeleccionado(aporte)}
              key={aporte}
              children={aporte}
            />
          ))}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    gap: 12,
  },
});
