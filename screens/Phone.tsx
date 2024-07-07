import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const Phone = () => {
  return (
    <View style={styles.phone}>
      <View style={[styles.card, styles.cardLayout]} />
      <Text style={[styles.toDoApp, styles.toDoAppTypo]}>To Do App</Text>
      <View style={[styles.input, styles.inputPosition]} />
      <Image
        style={[styles.inputPlusIcon, styles.inputPosition]}
        contentFit="cover"
        source={require("../assets/inputplus1.png")}
      />
      <Text style={[styles.someWords, styles.toDoAppTypo]}>some words</Text>
      <View style={styles.phoneChild} />
      <View style={[styles.phoneItem, styles.cardLayout]} />
      <Image
        style={styles.interfaceTrashFull}
        contentFit="cover"
        source={require("../assets/interface--trash-full.png")}
      />
      <View style={styles.phoneInner} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  toDoAppTypo: {
    textAlign: "left",
    fontFamily: FontFamily.ubuntuRegular,
    position: "absolute",
  },
  inputPosition: {
    height: 32,
    top: 134,
    position: "absolute",
  },
  card: {
    top: 46,
    left: 20,
    backgroundColor: Color.colorWhitesmoke,
    width: 350,
    height: 500,
  },
  toDoApp: {
    top: 69,
    left: 101,
    fontSize: FontSize.size_21xl,
    color: Color.primary,
  },
  input: {
    left: 70,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.soft,
    borderColor: Color.colorDarkgray,
    borderWidth: 1,
    width: 250,
    borderStyle: "solid",
  },
  inputPlusIcon: {
    marginLeft: 80.2,
    left: "50%",
    width: 45,
  },
  someWords: {
    top: 144,
    left: 81,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_100,
    width: 68,
    height: 13,
  },
  phoneChild: {
    top: 181,
    left: 33,
    borderColor: Color.colorGray_200,
    borderTopWidth: 1,
    width: 321,
    height: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  phoneItem: {
    top: 211,
    left: 304,
    backgroundColor: "#fe5353",
    width: 30,
    height: 30,
  },
  interfaceTrashFull: {
    top: 216,
    left: 309,
    width: 20,
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  phoneInner: {
    top: 593,
    left: 201,
    backgroundColor: "#d9d9d9",
    width: 100,
    height: 100,
    position: "absolute",
  },
  phone: {
    backgroundColor: Color.colorSteelblue,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Phone;
