import React, { useContext } from "react";
import { Text } from "react-native";
import { Button } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "../components/Spacer";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  const handleSignOut = () => {
    console.log("handleSignOut");
    signout();
  };

  return (
    <>
      <Text>Account Screen</Text>
      <Spacer>
        <Button title={"Sign Out"} onPress={handleSignOut} />
      </Spacer>
    </>
  );
};

AccountScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default AccountScreen;
