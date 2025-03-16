import { StyleSheet, View } from "react-native";
import React from "react";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import BackButton from "@/components/BackButton";
import StyledText from "@/components/StyledText";
import Input from "@/components/Input";
import { At } from "phosphor-react-native";

const Login = () => {
  return (
    <View style={styles.container}>
      <BackButton iconSize={28} />

      <View style={{ marginTop: spacingY._20, gap: 5 }}>
        <StyledText style={{ lineHeight: 50 }} size={33} weight="Bold">
          Hey!{"\n"}Welcome back
        </StyledText>
      </View>

      <View style={styles.form}>
        <StyledText size={20} weight="Light" color={colors.textLighter}>
          Login now to track all your expenses!
        </StyledText>
        <Input
          placeholder="Enter your email"
          icon={
            <At
              size={verticalScale(26)}
              color={colors.neutral300}
              weight="fill"
            />
          }
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacingY._30,
    paddingHorizontal: spacingX._20,
  },
  welcomeText: {
    fontSize: verticalScale(20),
    fontWeight: "bold",
    color: colors.text,
  },
  form: {
    gap: spacingY._20,
  },
  forgotPassword: {
    textAlign: "right",
    fontWeight: "500",
    color: colors.text,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  footerText: {
    textAlign: "center",
    color: colors.text,
    fontSize: verticalScale(15),
  },
});
