import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provider as BlogProvider } from "./src/context/BlogContext";
import indexScreen from './src/screen/Index';
import showScreen from './src/screen/ShowScreen'

const navigator = createStackNavigator(
  {
    Index: indexScreen,
    Show:showScreen
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Fun App"
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
