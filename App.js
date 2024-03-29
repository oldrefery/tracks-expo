import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import AccountScreen from "./src/screens/AccountScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";
import { setNavigator } from "./src/navigationRef";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const trackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen,
});
trackListFlow.navigationOptions = {
  title: "Tracks",
  tabBarIcon: <MaterialCommunityIcons name="format-list-text" size={20} />,
};

const switchNavigator = createSwitchNavigator(
  {
    ResolveAuth: ResolveAuthScreen,
    loginFlow: createStackNavigator({
      Signup: SignupScreen,
      Signin: SigninScreen,
    }),
    mainFlow: createBottomTabNavigator({
      trackListFlow,
      TrackCreate: TrackCreateScreen,
      Account: AccountScreen,
    }),
  },
  {
    initialRouteName: "ResolveAuth",
  }
);

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <LocationProvider>
        <TrackProvider>
          <App ref={(navigator) => setNavigator(navigator)} />
        </TrackProvider>
      </LocationProvider>
    </AuthProvider>
  );
};
