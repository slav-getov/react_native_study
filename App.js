import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import TextScreen from "./src/screens/TextScreen";
import CombinedTextElement from "./src/screens/CombinedTextElement";
import FriendsScreen from "./src/screens/FriendsScreen";
import ImageScreen from "./src/screens/ImageScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    CombinedGreeting: CombinedTextElement,
    FriendList: FriendsScreen,
    Image: ImageScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "P.G. first app",
    },
  }
);

export default createAppContainer(navigator);
