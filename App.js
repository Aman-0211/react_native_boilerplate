import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import NavigationService from "./NavigationService";
import Home from "./component/Home";
import Second_screen from "./component/Second_screen";

const TopLevelNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Second_screen: {
    screen: Second_screen
  }
});

const AppContainer = createAppContainer(TopLevelNavigator);

export default class App extends Component {
  // ...

  render() {
    return (
      <AppContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}
