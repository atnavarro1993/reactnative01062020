import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      count: 0,
    };
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.welcome}>
          {this.state.value ? (
            <Text>{this.state.value}</Text>
          ) : (
            <Text>Welcome to React native</Text>
          )}
        </View>
        <View>
          <Image
            source={require("./assets/react.png")}
            style={
              (styles.image,
              { transform: [{ rotate: `${this.state.count}deg` }] })
            }
          />
        </View>
        <View>
          <Text>degrees rotated: {this.state.count}°</Text>
        </View>
        <View >
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({ value: text })}
            value={this.state.value}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({ count: this.state.count - 5 })}
          >
            <Text>rotate left</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({ count: this.state.count + 5 })}
          >
            <Text>rotate right</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          
        </ScrollView>
      </SafeAreaView>
    );
  }
}
let styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  image: {
    width: "100%",
    alignContent: "center",
    alignItems: "center",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 50,
  },
  textInput: {
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    width: 200,
    borderWidth: 2,
    borderColor:"blue",
    paddingLeft: 5,
    paddingRight: 5,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
  countText: {
    color: "#333333",
    fontSize: 30,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#DDDDDD",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    borderRadius: 20,
  },
});
