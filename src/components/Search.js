import { Text, View, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { commonStyles } from "../common/styles";

export default function Search() {
  return (
    <View style={[styles.container, commonStyles.elevation]}>
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
    padding: 10,
    marginTop: 15,
  },
  commonStyles,
  textInput: {
    fontSize: 17,
    marginLeft: 10,
  },
});
