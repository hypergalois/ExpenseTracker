import { StatusBar, StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { colors } from "@/constants/theme";
import { SafeAreaProvider } from "react-native-safe-area-context";

const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={"light-content"} />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: colors.neutral900,
          },
        }}
      ></Stack>
    </SafeAreaProvider>
  );
};

export default RootLayout;
