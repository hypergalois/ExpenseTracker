import { Alert, Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import BackButton from "@/components/BackButton";
import StyledText from "@/components/StyledText";
import Input from "@/components/Input";
import { At, Lock } from "phosphor-react-native";
import Button from "@/components/Button";
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();

  const emailRef = React.useRef("");
  const passwordRef = React.useRef("");

  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("Login", "Please fill in all fields");
      return;
    }

    console.log("Email:", emailRef.current);
    console.log("Password:", passwordRef.current);
  };

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
          onChangeText={(value) => {
            emailRef.current = value;
          }}
          icon={
            <At
              size={verticalScale(26)}
              color={colors.neutral300}
              weight="fill"
            />
          }
          autoComplete="email"
        />
        <Input
          placeholder="Enter your password"
          onChangeText={(value) => {
            passwordRef.current = value;
          }}
          secureTextEntry
          icon={
            <Lock
              size={verticalScale(26)}
              color={colors.neutral300}
              weight="fill"
            />
          }
          autoComplete="password"
        />

        <StyledText style={styles.forgotPassword} weight={"Medium"} size={15}>
          Forgot password?
        </StyledText>

        <Button
          onPress={handleSubmit}
          style={{ marginTop: spacingY._10 }}
          loading={isLoading}
        >
          <StyledText size={22} weight="Medium" color={colors.neutral900}>
            Login
          </StyledText>
        </Button>
      </View>

      <View style={styles.footer}>
        <StyledText size={15} color={colors.text}>
          Don't have an account?
        </StyledText>
        <Pressable
          onPress={() => {
            router.replace("/(auth)/register");
          }}
        >
          <StyledText
            size={15}
            weight="Medium"
            color={colors.primary}
            style={{ textDecorationLine: "underline" }}
          >
            Sign up
          </StyledText>
        </Pressable>
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
    textDecorationLine: "underline",
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
