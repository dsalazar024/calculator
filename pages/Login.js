import React from "react";
import { Text, View, Image, StyleSheet, TextInput, Button } from "react-native";
import Icon from "@expo/vector-icons/AntDesign";

export default class Login extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.principalPage}>
        <View style={styles.boxLogin}>
          <Image
            source={require("../assets/logo.png")}
            style={{ marginBottom: 50 }}
          ></Image>
          <View style={styles.userInput}>
            <Icon name="user" style={styles.iconsLabel} />
            <TextInput style={{ width: "60%" }} placeholder="User" />
          </View>
          <View style={styles.passwordInput}>
            <Icon name="lock" style={styles.iconsLabel} />
            <TextInput style={{ width: "60%" }} placeholder="Password" />
          </View>
          <View style={styles.buttonCalculator}>
            <Button
              title="Login"
              onPress={() => navigate("Reports")}
              color="#009821"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  principalPage: {
    height: "100%",
    width: "100%",
    flex: 1,
    backgroundColor: "#0072B1",
    alignItems: "center",
    justifyContent: "center",
  },
  boxLogin: {
    height: "70%",
    width: "80%",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  userInput: {
    width: "60%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    marginHorizontal: 55,
    paddingHorizontal: 10,
    borderWidth: 1.5,
    marginTop: 5,
    opacity: 0.4,
    marginBottom: 15,
    borderRadius: 5,
  },
  passwordInput: {
    width: "60%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    marginHorizontal: 55,
    paddingHorizontal: 10,
    borderWidth: 1.5,
    marginTop: 5,
    opacity: 0.4,
    borderRadius: 5,
  },
  iconsLabel: {
    color: "#000000",
    fontSize: 24,
  },
  inputStyle: {
    paddingHorizontal: 10,
  },
  buttonCalculator: {
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonStyle: {
    width: "20%",
    fontSize: 14,
    color: "#fff",
    fontWeight: "500",
  },
});
