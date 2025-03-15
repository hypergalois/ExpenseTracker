import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@/constants/theme";
import images from "@/constants/images";

const Index = () => {
  return (
    <View style={styles.container}>
      <Image source={images.logo} style={styles.logo} resizeMode="contain" />
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
  logo: {
    width: 200,
    height: 200,
  },
});
