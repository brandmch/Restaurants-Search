import { StyleSheet, Text, View } from "react-native";
import useRestaurants from "../Hooks/useRestaurants";

export default function Restaurants() {
  const [{ data, loading, error }, searchRestaurants] = useRestaurants();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top Restaurants</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
  },
});
