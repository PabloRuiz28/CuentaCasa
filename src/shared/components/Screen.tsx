import { ReactNode } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { useTheme } from "react-native-paper";
import { Edge, SafeAreaView } from "react-native-safe-area-context";

type ScreenProps = {
  children: ReactNode;
  edges?: Edge[];
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
};

export const Screen = ({
  children,
  edges = ["top", "left", "right"],
  style,
  contentStyle,
}: ScreenProps) => {
  const { colors } = useTheme();

  return (
    <SafeAreaView
      edges={edges}
      style={[style, { flex: 1, backgroundColor: colors.background }]}
    >
      <View style={[contentStyle, { flex: 1, paddingHorizontal: 16 }]}>
        {children}
      </View>
    </SafeAreaView>
  );
};
