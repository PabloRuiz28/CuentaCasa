import { ComponentProps } from "react";
import { TextInput } from "react-native-paper";

type FormTextInputProps = ComponentProps<typeof TextInput>;

export const FormTextInput = ({
  style,
  outlineStyle,
  mode = "outlined",
  ...rest
}: FormTextInputProps) => {
  return (
    <TextInput
      mode={mode}
      style={[{ height: 65 }, style]}
      outlineStyle={[{ borderRadius: 100 }, outlineStyle]}
      {...rest}
    />
  );
};
