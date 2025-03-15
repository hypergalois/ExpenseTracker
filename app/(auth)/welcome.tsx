import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import StyledText from "@/components/StyledText";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import images from "@/constants/images";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.loginButton}>
          <StyledText
            weight={"Medium"}
            style={{ textDecorationLine: "underline" }}
          >
            Sign In
          </StyledText>
        </TouchableOpacity>

        <Image
          source={images.welcome}
          style={styles.welcomeImage}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    paddingTop: spacingY._7,
  },
  welcomeImage: {
    width: "100%",
    height: verticalScale(300),
    alignSelf: "center",
    marginTop: verticalScale(100),
  },
  loginButton: {
    alignSelf: "flex-end",
    marginRight: spacingX._20,
  },
  footer: {
    backgroundColor: colors.neutral900,
    alignItems: "center",
    paddingTop: verticalScale(30),
    paddingBottom: verticalScale(45),
    gap: spacingX._20,
    shadowColor: "white",
    shadowOffset: { width: 0, height: -10 },
    elevation: 10,
    shadowRadius: 25,
    shadowOpacity: 0.15,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: spacingX._25,
  },
});
