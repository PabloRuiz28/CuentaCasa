import { useState } from "react";
import { View } from "react-native";
import { Chip, Icon, Text, TextInput, useTheme } from "react-native-paper";
import { FormTextInput } from "@presentation/components/FormTextInput";
import { PrimaryButton } from "@presentation/components/PrimaryButton";
import { AppError } from "@domain/errors";
import { Frecuencia, FRECUENCIAS } from "@domain/types";

type CreateFormProps = {
  onCreate: (baseAmount: number, frequency: Frecuencia) => void;
  isLoading: boolean;
  error: AppError | null;
};

export const CreateForm = ({ onCreate, isLoading, error }: CreateFormProps) => {
  const { colors } = useTheme();
  const [baseAmount, setBaseAmount] = useState("");
  const [frequency, setFrequency] = useState<Frecuencia>("Semanal");
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleSubmit = () => {
    const amount = Number(baseAmount);

    if (!baseAmount.trim() || Number.isNaN(amount) || amount <= 0) {
      setValidationError("Ingresa un monto base válido");
      return;
    }

    setValidationError(null);
    onCreate(amount, frequency);
  };

  return (
    <View className="flex-1 justify-center gap-8">
      <View className="gap-2">
        <Text variant="headlineMedium">Configura tu hogar</Text>
        <Text variant="bodyLarge">
          Define el monto base y la frecuencia de aporte
        </Text>
      </View>

      <View className="gap-4">
        <Text variant="bodyMedium">Monto base inicial</Text>
        <FormTextInput
          inputMode="numeric"
          placeholder="$0.00"
          left={<TextInput.Icon icon="cash" />}
          value={baseAmount}
          onChangeText={setBaseAmount}
        />
      </View>

      <View className="gap-4">
        <Text variant="bodyMedium">Frecuencia de aporte</Text>
        <View className="flex-row gap-2">
          {FRECUENCIAS.map((f) => (
            <Chip
              key={f}
              selected={f === frequency}
              onPress={() => setFrequency(f)}
              icon={() =>
                f === frequency ? (
                  <Icon source="check" size={16} color={colors.primary} />
                ) : null
              }
              style={{
                backgroundColor:
                  f === frequency ? colors.primaryContainer : "transparent",
                borderColor:
                  f === frequency ? "transparent" : colors.outlineVariant,
              }}
              textStyle={{
                color:
                  f === frequency ? colors.primary : colors.onSurfaceVariant,
              }}
            >
              {f}
            </Chip>
          ))}
        </View>
      </View>

      {validationError ? (
        <Text variant="bodySmall" style={{ color: colors.error }}>
          {validationError}
        </Text>
      ) : null}

      {error ? (
        <Text variant="bodySmall" style={{ color: colors.error }}>
          {error.message}
        </Text>
      ) : null}

      <PrimaryButton onPress={handleSubmit} loading={isLoading}>
        Crear Hogar
      </PrimaryButton>
    </View>
  );
};
