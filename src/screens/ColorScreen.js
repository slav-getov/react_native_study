import React, { useState } from "react";
import { View, Text, Button, FlatList } from "react-native";
import ColorBlock from "../components/ColorBlock";
const createRandomColor = () => {
  const random = Math.floor(Math.random() * 255);
  return random;
};
const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Button
        title="Add color"
        onPress={() => {
          setColors([
            ...colors,
            `rgb(${createRandomColor()}, ${createRandomColor()}, ${createRandomColor()})`,
          ]);
        }}
      />
      <FlatList
        data={colors}
        renderItem={({ item }) => <ColorBlock rgbAsString={item}/>}
        keyExtractor={(item)=>item}
      />
    </View>
  );
};

export default ColorScreen;
