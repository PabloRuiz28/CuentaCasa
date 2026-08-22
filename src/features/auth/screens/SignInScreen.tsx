import { Divider } from "react-native-paper";
import { Screen } from "../../../shared/components/Screen";
import { Footer } from "../components/signin/Footer";
import { Form } from "../components/signin/Form";
import { Header } from "../components/signin/Header";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { useResponsive } from "../../../shared/hooks/useResponsive";

export const SignInScreen = () => {
  const { isTablet, isLandscape } = useResponsive();
  return (
    <Screen
      contentStyle={{
        width: isLandscape ? "60%" : isTablet ? "80%" : "100%",
        maxHeight: isLandscape ? "100%" : isTablet ? "70%" : "auto",
        margin: "auto",
      }}
    >
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          paddingVertical: 16,
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
