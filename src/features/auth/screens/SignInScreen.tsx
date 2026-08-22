import { Divider } from "react-native-paper";
import { Screen } from "../../../shared/components/Screen";
import { Footer } from "../components/signin/Footer";
import { Form } from "../components/signin/Form";
import { Header } from "../components/signin/Header";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

export const SignInScreen = () => {
  return (
    <Screen>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          gap: 16,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <Form />
        <Divider />
        <Footer />
      </KeyboardAwareScrollView>
    </Screen>
  );
};
