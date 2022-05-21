import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "./src/components/Header";
import Search from "./src/components/Search";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi</Text>
      <StatusBar />
      <Header />
      <Search />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
  },
  text: {
    color: "#ffffff",
  },
});
