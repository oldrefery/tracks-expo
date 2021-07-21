import React, { useContext } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  const handleSignin = () => {
    navigation.navigate("Signin");
  };

  return (
    <View style={styles.container}>
      <AuthForm
        title={"Sign Up for Tracker"}
        errorMessage={state.errorMessage}
        submitTitle={"Sign Up"}
        onSubmit={signup}
      />
      <Pressable onPress={handleSignin} style={styles.link}>
        <Spacer>
          <Text style={styles.linkText}>
            Already have an account? Sign in instead
          </Text>
        </Spacer>
      </Pressable>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
  linkText: {
    color: "blue",
  },
  link: {
    alignItems: "center",
  },
});

export default SignupScreen;
