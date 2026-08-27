import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { Screen } from "../../../shared/components/Screen";
import { useResponsiveContentStyle } from "../../../shared/hooks/useResponsive";
import { Footer } from "../components/signin/Footer";
import { Form } from "../components/signin/Form";
import { Header } from "../components/signin/Header";
import { AuthScreenProps } from "../../../app/navigation/types";

export const SignInScreen = ({ navigation }: AuthScreenProps<"SignIn">) => {
  const { width, maxHeight, margin } = useResponsiveContentStyle();

  return (
    <Screen
      contentStyle={{ width: width, maxHeight: maxHeight, margin: margin }}
    >
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <Form />
        <Footer navigate={() => navigation.navigate("SignUp")} />
      </KeyboardAwareScrollView>
    </Screen>
  );
};
