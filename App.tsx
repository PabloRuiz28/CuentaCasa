import { SafeAreaView } from "react-native-safe-area-context";
import { AppProviders } from "./src/app/providers/AppProviders";
import { RootNavigator } from "./src/app/navigation/RootNavigator";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppProviders>
        <RootNavigator />
      </AppProviders>
    </SafeAreaView>
  );
}
