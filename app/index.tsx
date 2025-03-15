import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@/constants/theme";

const Index = () => {
  return (
    <View style={styles.container}>
      <Text>Index</Text>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.neutral900,
  },
});
