import { StyleSheet, Text, View } from "react-native";
import React from "react";
import StyledText from "@/components/StyledText";

const Welcome = () => {
  return (
    <View>
      <StyledText size={24}>Welcome to the app!</StyledText>
      <Text style={{ color: "white" }}>Hello</Text>

      <>
        <StyledText weight="Bold" size={24}>
          Hola Kanit Bold
        </StyledText>

        <StyledText weight="ExtraLightItalic" size={18} color="#666">
          Texto en ExtraLightItalic
        </StyledText>

        <StyledText weight="SemiBold" style={{ textAlign: "center" }}>
          Centered SemiBold
        </StyledText>
      </>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
