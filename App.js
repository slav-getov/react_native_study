import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import TextScreen from "./src/screens/TextScreen";
import CombinedTextElement from "./src/screens/CombinedTextElement";
import FriendsScreen from "./src/screens/FriendsScreen";
import ImageScreen from "./src/screens/ImageScreen";
import TestScreen from "./src/screens/TestScreen";
import ColorScreen from "./src/screens/ColorScreen";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    CombinedGreeting: CombinedTextElement,
    FriendList: FriendsScreen,
    Image: ImageScreen,
    Test: TestScreen,
    Colors: ColorScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "P.G. first app",
    },
  }
);

export default createAppContainer(navigator);
