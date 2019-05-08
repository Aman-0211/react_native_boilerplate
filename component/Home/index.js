import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { withNavigation } from "react-navigation";

class Home extends Component {
  state = {};

  render() {
    const data = {
      name: "Aman",
      lastName: "Thakur",
      age: 23
    };
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Home Page</Text>
        <Button
          title="go to second page"
          onPress={() => {
            this.props.navigation.navigate("Second_screen", {
              itemId: data
            });
          }}
        />
      </View>
    );
  }
}

export default withNavigation(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
