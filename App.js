import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import TextScreen from "./src/screens/TextScreen";
import CombinedTextElement from "./src/screens/CombinedTextElement";
import FriendsScreen from "./src/screens/FriendsScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    CombinedGreeting: CombinedTextElement,
    FriendList: FriendsScreen
  },
  {
    initialRouteName: "FriendList",
    defaultNavigationOptions: {
      title: "P.G. first app",
    },
  }
);

export default createAppContainer(navigator);
