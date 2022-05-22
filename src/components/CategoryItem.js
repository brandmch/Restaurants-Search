import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import pics from "../images/images";
import { commonStyles } from "../common/styles";
import { v1 as uuidv1 } from "uuid";
import Food from "../food_data";

const { container, elevation, foodItems, imageContainer } = commonStyles;

const foodCategories = Food.map((food) => {
  return (
    <View style={[container, elevation]}>
      <View style={imageContainer}>
        <Image source={food.img} style={{ height: 35, width: 35 }} />
      </View>
      <Text>{food.name}</Text>
    </View>
  );
});

export default function CategoryItem() {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={foodItems}>{foodCategories}</View>
    </ScrollView>
  );
}
