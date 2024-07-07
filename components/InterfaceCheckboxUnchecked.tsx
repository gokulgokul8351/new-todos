import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const InterfaceCheckboxUnchecked = () => {
  return (
    <View style={styles.interfaceCheckboxUnchecked}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    position: "absolute",
    height: "66.67%",
    width: "66.67%",
    top: "16.67%",
    right: "16.67%",
    bottom: "16.67%",
    left: "16.67%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  interfaceCheckboxUnchecked: {
    width: 30,
    height: 30,
  },
});

export default InterfaceCheckboxUnchecked;
