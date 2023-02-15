import React from "react";
import { View, StyleSheet } from "react-native";

const ColorBlock = ({ rgbAsString }) => {
  console.log(rgbAsString);
  const style = StyleSheet.create({
    colorBlock: {
      width: 200,
      height: 200,
      backgroundColor: rgbAsString,
    },
  });
  return <View style={style.colorBlock}></View>;
};

export default ColorBlock;
