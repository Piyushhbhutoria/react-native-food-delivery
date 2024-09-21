import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from "./components/Cart";
import DishesScreen from "./components/Dishes";
import RestaurantsScreen from "./components/Restaurants";
import CartButton from "./components/common/CartButton";

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
        options={({ navigation }) => ({
          headerTitle: "Restaurants",
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0
          },
          headerRight: () => (
            <CartButton
              onPress={() => {
                navigation.navigate("Cart");
              }}
            />
          )
        })
        }
      />
      <Stack.Screen
        name="Dishes"
        component={DishesScreen}
        options={({ navigation }) => ({
          headerTitle: "Menu",
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0
          },
          headerRight: () => (
            <CartButton
              onPress={() => {
                navigation.navigate("Cart");
              }}
            />
          )
        })
        }
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: "Cart",
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0
          }
        }}
      />
    </Stack.Navigator>
  );
}

export default function Root() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
