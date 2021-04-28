import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import Icon from "@expo/vector-icons/AntDesign";

export default class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      resulText: "",
      calculationText: "",
    };
    this.operations = ["C", "+", "—", "*", "/"];
  }

  calculateResult() {
    const text = this.state.resulText;
    this.setState({
      calculationText: eval(text),
    });
  }

  validate() {
    const text = this.state.resulText;
    switch (text.slice(-1)) {
      case "+":
      case "-":
      case "*":
      case "/":
        return false;
    }
    return true;
  }

  buttonPressed(text) {
    console.log(text);

    if (text == "=") {
      return this.validate() && this.calculateResult();
    }

    this.setState({
      resulText: this.state.resulText + text,
    });
  }

  operate(operation) {
    let text = this.state.resulText;
    const lastChar = text.split("").pop();

    if (this.operations.indexOf(lastChar) > 0) return;

    if (operation == "C") {
      let text01 = text.split("");
      text01.pop();
      this.setState({
        resulText: text01.join(""),
      });
    } else if (text != "") {
      return this.setState({
        resulText: this.state.resulText + operation,
      });
    }
  }

  render() {
    let elements = [];
    let numbs = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [".", 0, "="],
    ];

    for (let i = 0; i < 4; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        row.push(
          <TouchableOpacity
            key={numbs[i][j]}
            onPress={() => this.buttonPressed(numbs[i][j])}
            style={stylesCalculator.numbersbtn}
          >
            <Text style={stylesCalculator.textButtons}>{numbs[i][j]}</Text>
          </TouchableOpacity>
        );
      }
      elements.push(
        <View key={i} style={stylesCalculator.row}>
          {row}
        </View>
      );
    }

    let ops = [];
    for (let i = 0; i < 5; i++) {
      ops.push(
        <TouchableOpacity
          key={this.operations[i]}
          style={stylesCalculator.numbersbtn}
          onPress={() => this.operate(this.operations[i])}
        >
          <Text style={(stylesCalculator.textButtons, stylesCalculator.green)}>
            {this.operations[i]}
          </Text>
        </TouchableOpacity>
      );
    }

    const { navigate } = this.props.navigation;
    return (
      <View style={stylesCalculator.homePage}>
        <View style={stylesCalculator.principalPage}>
          <Icon
            onPress={() => navigate("Reports")}
            name="left"
            style={stylesCalculator.iconsLabel}
          />
          <Image
            source={require("../assets/logo.png")}
            style={{ alignContent: "center" }}
          ></Image>
        </View>
        <View style={stylesCalculator.result}>
          <Text style={stylesCalculator.resulText}>
            {" "}
            {this.state.resulText}{" "}
          </Text>
        </View>
        <View style={stylesCalculator.calculation}>
          <Text style={stylesCalculator.calculationText}>
            {" "}
            {this.state.calculationText}{" "}
          </Text>
        </View>
        <View style={stylesCalculator.buttons}>
          <View style={stylesCalculator.numbers}>{elements}</View>
          <View style={stylesCalculator.operations}>{ops}</View>
        </View>
      </View>
    );
  }
}

const stylesCalculator = StyleSheet.create({
  homePage: {
    flex: 1,
    backgroundColor: "#0072B1",
  },
  principalPage: {
    backgroundColor: "#F4F4F4",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 55,
    height: "20%",
    borderBottomEndRadius: 150,
    borderBottomStartRadius: 150,
  },
  iconsLabel: {
    marginLeft: "15%",
    marginRight: "15%",
    color: "#000000",
    fontSize: 25,
    borderWidth: 1.5,
    padding: 5,
    borderRadius: 100,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  numbersbtn: {
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
  },
  textButtons: {
    fontSize: 25,
  },
  green: {
    fontSize: 25,
    color: "#009821",
  },
  result: {
    height: "10%",
    backgroundColor: "#0072B1",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 15,
  },
  resulText: {
    fontSize: 20,
    color: "#fff",
  },
  calculation: {
    flex: 1,
    backgroundColor: "#0072B1",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 10,
  },
  calculationText: {
    fontSize: 20,
    color: "#fff",
  },
  buttons: {
    flexGrow: 5.5,
    flexDirection: "row",
  },
  numbers: {
    flex: 3,
    backgroundColor: "#F4F4F4",
  },
  operations: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "stretch",
    backgroundColor: "#F4F4F4",
  },
});
