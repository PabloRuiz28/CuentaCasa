import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { Text } from "react-native-paper";
import { Screen } from "../../../shared/components/Screen";
import { Footer } from "../components/signup/Footer";
import { Form } from "../components/signup/Form";
import { useResponsive } from "../../../shared/hooks/useResponsive";
import { useAuth } from "../context/AuthContext";

export const SignUpScreen = () => {
  const { isTablet, isLandscape } = useResponsive();
  const { signIn } = useAuth();
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
        <Text variant="headlineSmall" style={{ marginBottom: 24 }}>
          Registra tus datos para configurar tu hogar financiero
        </Text>

        <Form />

        <Footer
          signIn={signIn}
          navigate={() =>
            navigation.navigate("AuthPattern", { screen: "SignIn" })
          }
        />
      </KeyboardAwareScrollView>
    </Screen>
  );
};
