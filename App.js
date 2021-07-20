import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import AccountScreen from "./src/screens/AccountScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";

const switchNavigator = createSwitchNavigator(
  {
    loginFlow: createStackNavigator({
      Signup: SignupScreen,
      Signin: SigninScreen,
    }),
    mainFlow: createBottomTabNavigator({
      trackListFlow: createStackNavigator({
        TrackList: TrackListScreen,
        TrackDetail: TrackDetailScreen,
      }),
      TrackCreate: TrackCreateScreen,
      Account: AccountScreen,
    }),
  },
  {
    initialRouteName: "loginFlow",
  }
);

export default createAppContainer(switchNavigator);
