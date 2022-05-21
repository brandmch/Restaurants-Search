import { Text, View, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Search() {
  return (
    <View style={styles.container}>
      <FontAwesome name="search" size={20} />
      <TextInput style={styles.textInput} placeholder=" Restaurants, Food" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 5,
    marginHorizontal: 25,
    backgroundColor: "#ffffff",
    shadowColor: "black",
    shadowOffset: { width: 50, height: 50 },
    elevation: 3,
    shadowOpacity: 1,
    padding: 10,
    marginTop: 15,
    borderRadius: 20,
  },
  textInput: {},
});
