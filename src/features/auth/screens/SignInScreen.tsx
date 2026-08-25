import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { Divider } from "react-native-paper";
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
          justifyContent: "center",
        }}
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <Form />
        <Divider />
        <Footer
          navigate={() =>
            navigation.navigate("AuthPattern", { screen: "SignUp" })
          }
        />
      </KeyboardAwareScrollView>
    </Screen>
  );
};
