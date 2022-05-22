import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import Header from "./src/components/Header";
import Search from "./src/components/Search";
import CategoryItem from "./src/components/CategoryItem";

export default function App() {
  const [selectedItem, setSelectedItem] = useState(1);
  return (
    <View style={styles.container}>
      <StatusBar />
      <Header />
      <Search />
      <CategoryItem
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
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
