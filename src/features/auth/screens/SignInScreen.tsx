import { StyleSheet, View } from "react-native";
import { Divider, useTheme } from "react-native-paper";
import { Form } from "../components/signin/Form";
import { Header } from "../components/signin/Header";
import { Footer } from "../components/signin/Footer";

export const SignInScreen = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Header />
      <Form />

      <Divider />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
