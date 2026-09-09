import { SignUpDTO, SignUpSchema } from "@application/dto/SignUpDTO";
import { AppError, isAppError } from "@domain/errors";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormTextInput } from "@presentation/components/FormTextInput";
import { PrimaryButton } from "@presentation/components/PrimaryButton";
import { useAuth } from "@presentation/context/AuthContext";
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import {
  Button,
  Dialog,
  Portal,
  Text,
  TextInput,
  useTheme,
} from "react-native-paper";

type FormProps = {
  onSuccess: () => void;
};

export const Form = ({ onSuccess }: FormProps) => {
  const { signUp } = useAuth();
  const { colors } = useTheme();
  const [hidePass, setHidePass] = useState<boolean>(true);
  const [error, setError] = useState<AppError>();

  const [visible, setVisible] = useState<boolean>(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<SignUpDTO>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "test1@email.com",
      firstName: "Jhon",
      lastName: "Dow",
      password: "JhonDoe@17",
    },
  });

  //TextInput Refs
  const lastNameRef = useRef<any>(null);
  const emailRef = useRef<any>(null);
  const passwordRef = useRef<any>(null);

  const onSubmit = async (data: SignUpDTO) => {
    try {
      await signUp(data);
      onSuccess();
    } catch (error) {
      if (isAppError(error)) {
        setError(error);
        showDialog();
      }
    }
  };

  return (
    <View className="flex-1 py-12">
      <View className="flex-row gap-4 mb-8">
        <View className="flex-1 gap-2">
          <Text variant="bodyMedium">Nombre(s)</Text>
          <Controller
            control={control}
            name="firstName"
            render={({ field: { onChange, onBlur, value } }) => (
              <FormTextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Jhon"
                left={<TextInput.Icon icon="account" />}
                returnKeyType="next"
                onSubmitEditing={() => lastNameRef.current?.focus()}
              />
            )}
          />
          {errors.firstName && (
            <Text variant="bodySmall" style={{ color: colors.error }}>
              {errors.firstName.message}
            </Text>
          )}
        </View>

        <View className="flex-1 gap-2">
          <Text variant="bodyMedium">Apellido(s)</Text>
          <Controller
            control={control}
            name="lastName"
            render={({ field: { onChange, onBlur, value } }) => (
              <FormTextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Doe"
                left={<TextInput.Icon icon="account" />}
                returnKeyType="next"
                ref={lastNameRef}
                onSubmitEditing={() => emailRef.current?.focus()}
              />
            )}
          />
          {errors.lastName && (
            <Text variant="bodySmall" style={{ color: colors.error }}>
              {errors.lastName.message}
            </Text>
          )}
        </View>
      </View>

      <View className="gap-2 mb-8">
        <Text variant="bodyMedium">Correo electrónico</Text>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <FormTextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder="ejemplo@correo.com"
              left={<TextInput.Icon icon="email" />}
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              ref={emailRef}
              onSubmitEditing={() => passwordRef.current?.focus()}
            />
          )}
        />
        {errors.email && (
          <Text variant="bodySmall" style={{ color: colors.error }}>
            {errors.email.message}
          </Text>
        )}
      </View>

      <View className="gap-2 mb-16">
        <Text variant="bodyMedium">Contraseña</Text>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <FormTextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              secureTextEntry={hidePass}
              placeholder="************"
              left={<TextInput.Icon icon="lock" />}
              right={
                <TextInput.Icon
                  icon={hidePass ? "eye" : "eye-off"}
                  onPress={() => setHidePass(!hidePass)}
                  forceTextInputFocus={false}
                />
              }
              returnKeyType="done"
              ref={passwordRef}
            />
          )}
        />
        {errors.password && (
          <Text variant="bodySmall" style={{ color: colors.error }}>
            {errors.password.message}
          </Text>
        )}
      </View>

      <PrimaryButton
        disabled={!isValid || isSubmitting}
        onPress={handleSubmit(onSubmit)}
        loading={isSubmitting}
      >
        Continuar
      </PrimaryButton>

      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>{error?.name}</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">{error?.message}</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};
