import { StyleSheet, View } from "react-native";
import { Icon, Text, TouchableRipple, useTheme } from "react-native-paper";
import { IHomeSetting } from "../../types";

type OptionCardProps = {
  setting: IHomeSetting;
  isSelected: boolean;
  onSelect: (setting: IHomeSetting) => void;
};

export const OptionCard = ({
  setting,
  isSelected,
  onSelect,
}: OptionCardProps) => {
  const { colors } = useTheme();

  return (
    <TouchableRipple
      onPress={() => onSelect(setting)}
      style={[
        styles.settingContainer,
        isSelected && {
          backgroundColor: colors.secondaryContainer,
          borderColor: colors.primary,
          borderWidth: 1.5,
        },
      ]}
      borderless
    >
      <>
        <View
          style={[
            styles.iconContainer,
            { backgroundColor: colors.onSecondary },
          ]}
        >
          <Icon
            source={setting.icon}
            size={24}
            color={colors.onSurfaceVariant}
          />
        </View>
        <View style={{ flex: 1, gap: 8 }}>
          <Text variant="titleLarge"> {setting.title}</Text>
          <Text variant="bodyMedium">{setting.description}</Text>
        </View>
      </>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignSelf: "flex-start",
    padding: 16,
    borderRadius: 16,
  },
  settingContainer: {
    flexDirection: "row",
    height: 150,
    borderWidth: 0.5,
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingTop: 24,
    gap: 16,
    marginBottom: 32,
  },
});
