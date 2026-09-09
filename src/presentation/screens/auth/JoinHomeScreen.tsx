import { useState } from "react";
import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { Screen } from "@presentation/components/Screen";
import { useResponsiveContentStyle } from "@presentation/hooks/useResponsive";
import { Actions } from "@presentation/components/auth/joinhome/Actions";
import { AddCode } from "@presentation/components/auth/joinhome/AddCode";
import { Header } from "@presentation/components/auth/joinhome/Header";
import { useAuth } from "@presentation/context/AuthContext";
import { useJoinHousehold } from "@presentation/hooks/useJoinHousehold";

export const JoinHomeScreen = () => {
  const { user, completeOnboarding } = useAuth();
  const { joinHousehold, isLoading, error } = useJoinHousehold();
  const { width, maxHeight, margin } = useResponsiveContentStyle();
  const { colors } = useTheme();
  const [code, setCode] = useState("");

  const handleJoin = async () => {
    if (!user) return;

    const member = await joinHousehold({ code, userId: user.id });
    if (member) {
      completeOnboarding();
    }
  };

  return (
    <Screen
      contentStyle={{
        width: width,
        maxHeight: maxHeight,
        margin: margin,
        justifyContent: "space-between",
      }}
    >
      <View style={{ gap: 16 }}>
        <Header />

        <AddCode value={code} onChangeText={setCode} />

        {error ? (
          <Text variant="bodySmall" style={{ color: colors.error }}>
            {error.message}
          </Text>
        ) : null}
      </View>

      <Actions onJoin={handleJoin} isLoading={isLoading} />
    </Screen>
  );
};
