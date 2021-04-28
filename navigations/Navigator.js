import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from "../pages/Login";
import Reports from "../pages/Reports";
import Calculator from "../pages/Calculator";

const stackNavigatorOptions = {
  headerShown: false,
};

const AppNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    Reports: { screen: Reports },
    Calculator: { screen: Calculator },
  },
  {
    defaultNavigationOptions: stackNavigatorOptions,
  }
);

export default createAppContainer(AppNavigator);
