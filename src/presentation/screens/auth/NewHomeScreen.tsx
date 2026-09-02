import { useState } from "react";
import { ScrollView } from "react-native";
import { Text } from "react-native-paper";
import { Screen } from "@presentation/components/Screen";
import { useResponsiveContentStyle } from "@presentation/hooks/useResponsive";
import { Header } from "@presentation/components/auth/newhome/Header";
import { SharedHomeCode } from "@presentation/components/auth/newhome/SharedHomeCode";
import { useAuth } from "@presentation/context/AuthContext";
import { PrimaryButton } from "@presentation/components/PrimaryButton";

export const NewHomeScreen = () => {
  const { signIn } = useAuth();
  const { width, maxHeight, margin } = useResponsiveContentStyle();
  const [homeCode, setHomeCode] = useState<string>("HOGAR-880");

  return (
    <Screen
      contentStyle={{ width: width, maxHeight: maxHeight, margin: margin }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "space-around",
          gap: 24,
        }}
      >
        <Header />

        <SharedHomeCode homeCode={homeCode} />

        <Text variant="bodyLarge" style={{ textAlign: "center" }}>
          Tu cónyuge podrá ingresar este código al momento de registrarse en la
          aplicación.
        </Text>

        <PrimaryButton onPress={signIn}>Continuar al Dashboard</PrimaryButton>
      </ScrollView>
    </Screen>
  );
};
