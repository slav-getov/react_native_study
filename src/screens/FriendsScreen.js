import { FlatList, View, Text, StyleSheet } from "react-native";

const FriendsScreen = () => {
  const friendsAsAnArr = [
    { name: "Friend 1", age: 21 },
    { name: "Friend 2", age: 33 },
    { name: "Friend 3", age: 44 },
  ];
  return (
    <View>
      <FlatList
        data={friendsAsAnArr}
        keyExtractor={(friend) => friend.name}
        renderItem={({ item }) => (
          <Text style={listStyle.list}>
            {item.name} and is {item.age} years old
          </Text>
        )}
      />
    </View>
  );
};

const listStyle = StyleSheet.create({ list: { marginVertical: 40 } });

export default FriendsScreen;
