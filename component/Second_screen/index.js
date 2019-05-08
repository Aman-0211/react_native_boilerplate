import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class Second_screen extends Component {
  state = {};
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam("itemId", "NO-ID");
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Second Page</Text>
        <Text style={styles.instructions}>
          Name: {JSON.stringify(itemId.name)}
        </Text>
        <Text style={styles.instructions}>
          Lastname: {JSON.stringify(itemId.lastName)}
        </Text>
        <Text style={styles.instructions}>
          Age: {JSON.stringify(itemId.age)}
        </Text>
        <Button
          title="go to Home page"
          onPress={() => {
            this.props.navigation.navigate("Home");
          }}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

export default Second_screen;

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
