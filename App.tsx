import { SafeAreaView } from "react-native-safe-area-context";
import { AppProviders } from "./src/app/providers/AppProviders";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppProviders />
    </SafeAreaView>
  );
}
