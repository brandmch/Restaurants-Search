import { Text, View, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.lightHeader}>Grab your</Text>
      <Text style={styles.subHeader}>Delicious food!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginTop: 60,
  },

  lightHeader: {
    fontSize: 35,
  },

  subHeader: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
