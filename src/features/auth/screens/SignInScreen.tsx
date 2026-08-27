import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { Screen } from "../../../shared/components/Screen";
import { useResponsiveContentStyle } from "../../../shared/hooks/useResponsive";
import { Footer } from "../components/signin/Footer";
import { Form } from "../components/signin/Form";
import { Header } from "../components/signin/Header";

export const SignInScreen = () => {
  const { width, maxHeight, margin } = useResponsiveContentStyle();
  const navigation = useNavigation();

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
        <Footer
          navigate={() =>
            navigation.navigate("AuthPattern", { screen: "SignUp" })
          }
        />
      </KeyboardAwareScrollView>
    </Screen>
  );
};
