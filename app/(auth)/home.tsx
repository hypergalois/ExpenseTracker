import { View, Text, Button } from "react-native";
import { getAuth, signOut } from "@react-native-firebase/auth";

const Page = () => {
  const authInstance = getAuth();
  const user = authInstance.currentUser;

  const handleSignOut = async () => {
    try {
      await signOut(authInstance);
    } catch (error: any) {
      console.error("Sign out error:", error.message);
    }
  };

  return (
    <View>
      <Text>Welcome back {user?.email}</Text>
      <Button title="Sign out" onPress={handleSignOut} />
    </View>
  );
};

export default Page;
