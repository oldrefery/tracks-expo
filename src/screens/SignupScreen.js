import React, { useContext, useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, signup } = useContext(AuthContext);

  const handleSignup = () => {
    signup({ email, password });
  };

  const handleSignin = () => {
    navigation.navigate("Signin");
  };

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {state.errorMessage ? (
        <Text style={styles.error}>{state.errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button title="Sign Up" onPress={handleSignup} />
      </Spacer>
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
  error: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
  linkText: {
    color: "blue",
  },
  link: {
    alignItems: "center",
  },
});

export default SignupScreen;
