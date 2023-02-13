import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import TextScreen from "./src/screens/TextScreen";
import CombinedTextElement from "./src/screens/CombinedTextElement";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    CombinedGreeting: CombinedTextElement
  },
  {
    initialRouteName: "CombinedGreeting",
    defaultNavigationOptions: {
      title: "P.G. first app",
    },
  }
);

export default createAppContainer(navigator);
