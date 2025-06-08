import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { colors } from "@/constants/theme";
import images from "@/constants/images";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/welcome");
    }, 500);
  }, []);

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
  },
  logo: {
    height: "20%",
    aspectRatio: 1,
  },
});
