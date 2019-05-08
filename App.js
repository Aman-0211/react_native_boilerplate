import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import NavigationService from "./NavigationService";
import Home from "./component/Home";

const TopLevelNavigator = createStackNavigator({
  Home: {
    screen: Home
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
