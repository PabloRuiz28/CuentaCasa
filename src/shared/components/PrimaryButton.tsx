import { ComponentProps } from "react";
import { Button } from "react-native-paper";

type PrimaryButtonProps = ComponentProps<typeof Button>;

export const PrimaryButton = ({
  style,
  contentStyle,
  mode = "contained",
  ...rest
}: PrimaryButtonProps) => {
  return (
    <Button
      mode={mode}
      style={[{ borderRadius: 100 }, style]}
      contentStyle={[{ height: 55 }, contentStyle]}
      {...rest}
    />
  );
};
