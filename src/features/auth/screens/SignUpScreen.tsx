import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { Text } from "react-native-paper";
import { Screen } from "../../../shared/components/Screen";
import { useResponsiveContentStyle } from "../../../shared/hooks/useResponsive";
import { Footer } from "../components/signup/Footer";
import { Form } from "../components/signup/Form";
import { AuthScreenProps } from "../../../app/navigation/types";

export const SignUpScreen = ({ navigation }: AuthScreenProps<"SignUp">) => {
  const { width, maxHeight, margin } = useResponsiveContentStyle();

  return (
    <Screen
      contentStyle={{ width: width, maxHeight: maxHeight, margin: margin }}
    >
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <Text variant="headlineMedium" style={{ marginBottom: 32 }}>
          Registra tus datos para configurar tu hogar financiero
        </Text>

        <Form />

        <Footer
          backNavFn={navigation.goBack}
          homeSettingNavFn={() => navigation.navigate("HomeSetting")}
        />
      </KeyboardAwareScrollView>
    </Screen>
  );
};
