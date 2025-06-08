import { Text, TextStyle } from "react-native";
import React from "react";
import { colors } from "@/constants/theme";
import { StyledTextProps } from "@/types";
import { verticalScale } from "@/utils/styling";
import Fonts from "@/constants/fonts";

const StyledText = ({
  children,
  size = 16,
  weight = "Regular",
  color = colors.text,
  style,
  ...props
}: StyledTextProps) => {
  const fontKey = `Kanit${weight}` as keyof typeof Fonts;
  const fontFamily = Fonts[fontKey];

  const textStyle: TextStyle = {
    fontFamily,
    fontSize: verticalScale(size),
    color,
  };

  return (
    <Text style={[textStyle, style]} {...props}>
      {children}
    </Text>
  );
};

export default StyledText;
