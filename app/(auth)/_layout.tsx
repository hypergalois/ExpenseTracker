import { colors } from "@/constants/theme";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Layout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: colors.neutral900,
          },
        }}
      />
    </SafeAreaView>
  );
};
export default Layout;
