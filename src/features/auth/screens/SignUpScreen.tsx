import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { Text } from "react-native-paper";
import { Screen } from "../../../shared/components/Screen";
import { useResponsiveContentStyle } from "../../../shared/hooks/useResponsive";
import { Footer } from "../components/signup/Footer";
import { Form } from "../components/signup/Form";

export const SignUpScreen = () => {
  const { width, maxHeight, margin } = useResponsiveContentStyle();
  const navigation = useNavigation();

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
          homeSettingNavFn={() =>
            navigation.navigate("AuthPattern", { screen: "HomeSetting" })
          }
        />
      </KeyboardAwareScrollView>
    </Screen>
  );
};
