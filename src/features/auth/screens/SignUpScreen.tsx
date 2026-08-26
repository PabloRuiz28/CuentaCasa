import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { Text } from "react-native-paper";
import { Screen } from "../../../shared/components/Screen";
import { Footer } from "../components/signup/Footer";
import { Form } from "../components/signup/Form";
import { useResponsive } from "../../../shared/hooks/useResponsive";

export const SignUpScreen = () => {
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
