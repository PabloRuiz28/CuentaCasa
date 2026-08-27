import { useState } from "react";
import { ScrollView } from "react-native";
import { Button, Text } from "react-native-paper";
import { Screen } from "../../../shared/components/Screen";
import { useResponsiveContentStyle } from "../../../shared/hooks/useResponsive";
import { Header } from "../components/newhome/Header";
import { SharedHomeCode } from "../components/newhome/SharedHomeCode";
import { useAuth } from "../context/AuthContext";

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

        <Button
          mode="contained"
          style={{ borderRadius: 100 }}
          contentStyle={{ height: 55 }}
          onPress={signIn}
        >
          Continuar al Dashboard
        </Button>
      </ScrollView>
    </Screen>
  );
};
