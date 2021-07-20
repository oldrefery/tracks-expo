import React from "react";
import { Button, Text, View } from "react-native";

const SignupScreen = ({ navigation }) => {
  const handleSignin = () => {
    navigation.navigate("Signin");
  };
  const handleGotoApp = () => {
    navigation.navigate("mainFlow");
  };

  return (
    <View>
      <Text>Signup Screen</Text>
      <Button title={"Go to Signin"} onPress={handleSignin} />
      <Button title={"Go to main Flow"} onPress={handleGotoApp} />
    </View>
  );
};

export default SignupScreen;
