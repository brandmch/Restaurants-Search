import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import Header from "./src/components/Header";
import Search from "./src/components/Search";
import CategoryItem from "./src/components/CategoryItem";
import Restaurants from "./src/components/Restaurants";

export default function App() {
  const [selectedItem, setSelectedItem] = useState(0);
  return (
    <View style={{ backgroundColor: "#ffffff" }}>
      <StatusBar />
      <Header />
      <Search selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      <CategoryItem
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <Restaurants />
    </View>
  );
}
