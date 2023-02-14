import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {

  return <View>
    <Text style={styles.text}>Home1</Text>
    <TouchableOpacity onPress={()=>navigation.navigate("CombinedGreeting")}><Text>Go to combined text</Text></TouchableOpacity>
  </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
