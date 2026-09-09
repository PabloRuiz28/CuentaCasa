import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useAuth } from "@presentation/context/AuthContext";

export const SettingsScreen = () => {
  const { user, signOut } = useAuth();

  return (
    <View style={{ flex: 1, padding: 24, gap: 16 }}>
      <Text variant="titleLarge">
        {user ? `${user.firstName} ${user.lastName}` : "Sin sesión"}
      </Text>
      {user ? <Text variant="bodyMedium">{user.email}</Text> : null}

      <Button mode="contained" onPress={signOut}>
        Cerrar sesión
      </Button>
    </View>
  );
};
