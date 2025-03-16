import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { InputProps } from "@/types";
import { colors, radius, spacingX } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";

const Input = ({ icon, containerStyle, inputStyle, inputRef }: InputProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {icon}
      <TextInput
        style={[styles.input, inputStyle]}
        ref={inputRef}
        placeholderTextColor={colors.neutral400}
        placeholder="Email"
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: verticalScale(54),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.neutral300,
    borderRadius: radius._12,
    borderCurve: "continuous",
    paddingHorizontal: spacingX._15,
    gap: spacingX._10,
  },
  input: {
    flex: 1,
    fontSize: verticalScale(16),
    color: colors.white,
  },
});
