import React from "react";
import { Button, Text, View } from "react-native";

const SigninScreen = ({ navigation }) => {
  const handleSignup = () => {
    navigation.navigate("Signup");
  };

  return (
    <View>
      <Text>Signin Screen</Text>
      <Button title={"Go to Signup"} onPress={handleSignup} />
    </View>
  );
};

export default SigninScreen;
