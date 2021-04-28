import React from "react";
import { Text, View, Image, StyleSheet, TextInput, Button } from "react-native";
import Icon from "@expo/vector-icons/AntDesign";

export default class Reports extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <View style={stylesReports.primaryBox}>
          <Icon
            onPress={() => navigate("Login")}
            name="left"
            style={stylesReports.iconsLabel}
          />
          <Image
            source={require("../assets/logo.png")}
            style={{ alignContent: "center" }}
          ></Image>
        </View>
        <View style={stylesReports.secondBox}>
          <Text style={stylesReports.styleH1}> Reports </Text>
          <View style={stylesReports.buttonCalculator}>
            <Image
              source={require("../assets/calculator.png")}
              style={{ width: 35, height: 35 }}
            ></Image>
            <Text
              onPress={() => navigate("Calculator")}
              style={stylesReports.buttonText}
            >
              Calculator
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const stylesReports = StyleSheet.create({
  primaryBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D1D1D1",
    paddingVertical: 15,
    height: "20%",
  },
  secondBox: {
    paddingTop: 25,
    flexDirection: "row",
    backgroundColor: "#ffffff",
    width: "100%",
    height: "80%",
    justifyContent: "space-around",
  },
  buttonCalculator: {
    backgroundColor: "#0072B1",
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "10%",
    borderRadius: 5,
  },
  buttonsBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconsLabel: {
    marginLeft: "7%",
    marginRight: "15%",
    color: "#000000",
    fontSize: 25,
    borderWidth: 1.5,
    padding: 5,
    borderRadius: 100,
  },
  styleH1: {
    marginTop: 10,
    color: "#0072B1",
    fontSize: 25,
    fontWeight: "bold",
  },
  buttonText: {
    paddingLeft: 5,
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "500",
  },
});
