import React from "react";
import {
  FlatList,
  StyleSheet,
  View
} from "react-native";
import restaurantsData from "../api/restaurants.json";
import RestaurantItem from "./RestaurantItem";
import CartButton from "./common/CartButton";

export default class Restaurants extends React.Component {
  constructor(props) {
    super(props);
  }
  
  handleNaviagation = () => {
    this.props.navigation.navigate("Dishes");
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={restaurantsData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <RestaurantItem
              name={item.name}
              image={item.image}
              cuisine={item.cuisine}
              location={item.location}
              isVegetarian={item.isVegetarian}
              handleNaviagation={this.handleNaviagation}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 8,
    marginBottom: 8
  }
});
