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

      <View style={styles.footer}>
        <View style={{ alignItems: "center" }}>
          <StyledText
            size={30}
            weight="Bold"
            style={{ textAlign: "center", lineHeight: 40 }}
          >
            Always take control{"\n"}of your finances
          </StyledText>
        </View>

        <View style={{ alignItems: "center", gap: 2 }}>
          <StyledText
            size={17}
            color={colors.textLight}
            weight="Light"
            style={{ textAlign: "center" }}
          >
            Finances must be arranged to set a better{"\n"}lifestyle in the
            future
          </StyledText>
        </View>

        <View style={styles.buttonContainer}></View>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    paddingTop: spacingY._7,
    flex: 1,
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
    paddingTop: verticalScale(40),
    paddingBottom: verticalScale(45),
    gap: spacingX._20,
    shadowColor: "white",
    shadowOffset: { width: 0, height: -10 },
    elevation: 10,
    shadowRadius: 25,
    shadowOpacity: 0.05,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: spacingX._25,
  },
});
