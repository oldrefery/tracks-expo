import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "../components/Spacer";
import { SafeAreaView } from "react-navigation";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  const handleSignOut = () => {
    console.log("handleSignOut");
    signout();
  };

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={styles.title}>Account Screen</Text>
      <Spacer>
        <Button title={"Sign Out"} onPress={handleSignOut} />
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginTop: 10,
    alignSelf: "center",
  },
});

export default AccountScreen;
