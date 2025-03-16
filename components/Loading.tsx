import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LoadingProps } from "@/types";
import { colors } from "@/constants/theme";

const Loading = ({ size = "large", color = colors.primary }: LoadingProps) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({});
