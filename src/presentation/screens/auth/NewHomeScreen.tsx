import { useState } from "react";
import { ScrollView } from "react-native";
import { Text } from "react-native-paper";
import { Screen } from "@presentation/components/Screen";
import { useResponsiveContentStyle } from "@presentation/hooks/useResponsive";
import { Header } from "@presentation/components/auth/newhome/Header";
import { SharedHomeCode } from "@presentation/components/auth/newhome/SharedHomeCode";
import { CreateForm } from "@presentation/components/auth/newhome/CreateForm";
import { useAuth } from "@presentation/context/AuthContext";
import { useCreateHousehold } from "@presentation/hooks/useCreateHousehold";
import { PrimaryButton } from "@presentation/components/PrimaryButton";
import { Household } from "@domain/entities/Household";
import { Frecuencia } from "@domain/types";

export const NewHomeScreen = () => {
  const { user, completeOnboarding } = useAuth();
  const { createHousehold, isLoading, error } = useCreateHousehold();
  const { width, maxHeight, margin } = useResponsiveContentStyle();
  const [household, setHousehold] = useState<Household | null>(null);

  const handleCreate = async (baseAmount: number, frequency: Frecuencia) => {
    if (!user) return;

    const created = await createHousehold({
      createdByUserId: user.id,
      baseAmount,
      contributionFrequency: frequency,
    });

    if (created) {
      setHousehold(created);
    }
  };

  if (!household) {
    return (
      <Screen
        contentStyle={{ width: width, maxHeight: maxHeight, margin: margin }}
      >
        <CreateForm
          onCreate={handleCreate}
          isLoading={isLoading}
          error={error}
        />
      </Screen>
    );
  }

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

        <SharedHomeCode homeCode={household.code} />

        <Text variant="bodyLarge" style={{ textAlign: "center" }}>
          Tu cónyuge podrá ingresar este código al momento de registrarse en la
          aplicación.
        </Text>

        <PrimaryButton onPress={completeOnboarding}>
          Continuar al Dashboard
        </PrimaryButton>
      </ScrollView>
    </Screen>
  );
};
