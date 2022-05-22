import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";
import { commonStyles } from "../common/styles";
import Food from "../food_data";

const { container, elevation, imageContainer, pic } = commonStyles;

export default function CategoryItem() {
  const [selectedItem, setSelectedItem] = useState(1);

  const foodCategories = Food.map((food) => {
    return (
      <TouchableWithoutFeedback onPress={() => setSelectedItem(food.id)}>
        <View
          style={[
            container,
            elevation,
            {
              backgroundColor: selectedItem !== food.id ? "#ffffff" : "#b6ff38",
            },
          ]}
          onPress={() => {
            console.log("PRESSED MOGO");
          }}
          key={food.id}
        >
          <View style={imageContainer}>
            <Image source={food.img} style={pic} />
          </View>
          <Text style={{ fontWeight: "bold" }}>{food.name}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  });

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={{ flexDirection: "row" }}>{foodCategories}</View>
    </ScrollView>
  );
}
