import "./global.css";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { RootNavigator } from "./src/bootstrap/navigation/RootNavigator";
import { AppProviders } from "./src/bootstrap/providers/AppProviders";

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <AppProviders>
        <RootNavigator />
      </AppProviders>
    </SafeAreaProvider>
  );
}
