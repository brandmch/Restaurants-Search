import { Text, View, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { commonStyles } from "../common/styles";
import { useState } from "react";
import food from "../food_data.js";

export default function Search({ selectedItem, setSelectedItem }) {
  const [input, setInput] = useState("");

  const handleInputChange = () => {
    if (!input) return;
    setInput(input);
    for (let i = 0; i < food.length; i++) {
      if (food[i].name === input) {
        setSelectedItem(food[i].id);
        setInput("");
      }
    }
  };

  return (
    <View style={[styles.container, commonStyles.elevation]}>
      <FontAwesome name="search" size={20} />
      <TextInput
        style={styles.textInput}
        placeholder=" Restaurants, Food"
        value={input}
        onChangeText={(text) => {
          setInput(text);
        }}
        onEndEditing={handleInputChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 5,
    marginHorizontal: 25,
    backgroundColor: "#ffffff",
    padding: 10,
    marginTop: 15,
  },
  commonStyles,
  textInput: {
    fontSize: 17,
    marginLeft: 10,
  },
});
