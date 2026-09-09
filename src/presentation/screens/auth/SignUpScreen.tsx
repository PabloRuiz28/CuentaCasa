import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { Text } from "react-native-paper";
import { Screen } from "@presentation/components/Screen";
import { useResponsiveContentStyle } from "@presentation/hooks/useResponsive";
import { Footer } from "@presentation/components/auth/signup/Footer";
import { Form } from "@presentation/components/auth/signup/Form";
import { AuthScreenProps } from "@bootstrap/navigation/types";
import { View } from "react-native";

export const SignUpScreen = ({ navigation }: AuthScreenProps<"SignUp">) => {
  const { width, maxHeight, margin } = useResponsiveContentStyle();

  return (
    <Screen
      contentStyle={{ width: width, maxHeight: maxHeight, margin: margin }}
    >
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
      >
        <View className="flex-1 justify-between py-8">
          <Text variant="headlineMedium">
            Registra tus datos para configurar tu hogar financiero
          </Text>

          <Form onSuccess={() => navigation.navigate("HomeSetting")} />

          <Footer backNavFn={navigation.goBack} />
        </View>
      </KeyboardAwareScrollView>
    </Screen>
  );
};
