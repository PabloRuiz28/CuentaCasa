import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { Screen } from "../../../shared/components/Screen";
import { useResponsive } from "../../../shared/hooks/useResponsive";
import { Footer } from "../components/signin/Footer";
import { Form } from "../components/signin/Form";
import { Header } from "../components/signin/Header";

export const SignInScreen = () => {
  const { isTablet, isLandscape } = useResponsive();
  const navigation = useNavigation();

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
