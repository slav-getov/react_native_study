import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {

  return <View>
    <Text style={styles.text}>Home1</Text>
    <TouchableOpacity onPress={()=>navigation.navigate("CombinedGreeting")}><Text>Go to combined text</Text></TouchableOpacity>
    <Button title="Go to image screen" onPress={()=>navigation.navigate('Image')} accessibilityLabel="a button which will show image screen"/>
    <Button title="Go to test demo" onPress={()=>{navigation.navigate('Test')}} accessibilityLabel="This button goes to test demo project"/>
    <Button title="Go to color demo" onPress={()=>{navigation.navigate('Colors')}} accessibilityLabel="this button goes to color demo"/>
  </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;


