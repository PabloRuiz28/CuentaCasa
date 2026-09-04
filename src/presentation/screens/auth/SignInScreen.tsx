import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { Screen } from "@presentation/components/Screen";
import { useResponsiveContentStyle } from "@presentation/hooks/useResponsive";
import { Footer } from "@presentation/components/auth/signin/Footer";
import { Form } from "@presentation/components/auth/signin/Form";
import { Header } from "@presentation/components/auth/signin/Header";
import { AuthScreenProps } from "@bootstrap/navigation/types";
import { View } from "react-native";

export const SignInScreen = ({ navigation }: AuthScreenProps<"SignIn">) => {
  const { width, maxHeight, margin } = useResponsiveContentStyle();

  return (
    <Screen
      contentStyle={{ width: width, maxHeight: maxHeight, margin: margin }}
    >
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 justify-between py-8">
          <Header />
          <Form />
          <Footer navigate={() => navigation.navigate("SignUp")} />
        </View>
      </KeyboardAwareScrollView>
    </Screen>
  );
};
