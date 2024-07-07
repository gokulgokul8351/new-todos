import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Desktop = () => {
  return (
    <View style={styles.desktop}>
      <View style={styles.card} />
      <Text style={styles.toDoApp}>To Do App</Text>
      <View style={[styles.input, styles.inputPosition]} />
      <Image
        style={[styles.inputPlusIcon, styles.inputPosition]}
        contentFit="cover"
        source={require("../assets/inputplus.png")}
      />
      <Text style={[styles.someWords, styles.someWordsTypo]}>some words</Text>
      <View style={[styles.desktopChild, styles.desktopLayout]} />
      <Image
        style={[styles.interfaceCheck, styles.desktopItemPosition]}
        contentFit="cover"
        source={require("../assets/interface--check.png")}
      />
      <Text style={[styles.createANew, styles.someWordsTypo]}>
        Create a new design
      </Text>
      <View style={[styles.desktopItem, styles.desktopItemPosition]} />
      <View style={[styles.desktopInner, styles.lineViewPosition]} />
      <View style={[styles.lineView, styles.lineViewPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputPosition: {
    height: 32,
    top: 133,
    position: "absolute",
  },
  someWordsTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.ubuntuRegular,
    position: "absolute",
  },
  desktopLayout: {
    height: 55,
    width: 490,
    backgroundColor: Color.soft,
  },
  desktopItemPosition: {
    left: 474,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  lineViewPosition: {
    left: 450,
    position: "absolute",
  },
  card: {
    top: 56,
    left: 398,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    borderRadius: 20,
    backgroundColor: Color.colorWhitesmoke,
    width: 600,
    height: 450,
    position: "absolute",
  },
  toDoApp: {
    top: 76,
    left: 606,
    fontSize: FontSize.size_21xl,
    color: Color.primary,
    textAlign: "left",
    fontFamily: FontFamily.ubuntuRegular,
    position: "absolute",
  },
  input: {
    left: 573,
    borderColor: Color.colorDarkgray,
    borderWidth: 1,
    width: 250,
    borderStyle: "solid",
    backgroundColor: Color.soft,
    height: 32,
    borderRadius: Border.br_8xs,
    top: 133,
  },
  inputPlusIcon: {
    marginLeft: 58.7,
    left: "50%",
    width: 45,
    height: 32,
    top: 133,
  },
  someWords: {
    top: 142,
    left: 584,
    color: Color.colorGray_100,
    width: 68,
    height: 13,
  },
  desktopChild: {
    top: 194,
    left: 453,
    borderRadius: Border.br_8xs,
    width: 490,
    position: "absolute",
  },
  interfaceCheck: {
    top: 210,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  createANew: {
    top: 216,
    left: 628,
    color: "#000",
  },
  desktopItem: {
    top: 254,
    height: 55,
    width: 490,
    backgroundColor: Color.soft,
  },
  desktopInner: {
    top: 366,
    height: 55,
    width: 490,
    backgroundColor: Color.soft,
    borderRadius: Border.br_8xs,
  },
  lineView: {
    top: 180,
    borderColor: Color.colorGray_200,
    borderTopWidth: 1,
    width: 501,
    height: 1,
    borderStyle: "solid",
  },
  desktop: {
    backgroundColor: Color.colorSteelblue,
    flex: 1,
    width: "100%",
    height: 1024,
    overflow: "hidden",
  },
});

export default Desktop;
