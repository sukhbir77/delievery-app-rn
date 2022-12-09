import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";

import Home from "./screens/Home";
import RestaurantScreen from "./screens/RestaurantScreen";
import { store } from "./store";
import BasketScreen from "./components/BasketScreen";
import PreparingOrderScreen from "./components/PreparingOrderScreen";
import DeliveryScreen from "./components/DeliveryScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store} >
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen name="Basket" component={BasketScreen} options={{presentation: "modal", headerShown: false}} />
          <Stack.Screen name="PreparingOrder" component={PreparingOrderScreen} options={{
            presentation: "fullScreenModal", headerShown: false
          }} />
          <Stack.Screen name="Delivery" component={DeliveryScreen} options={{
            presentation: "fullScreenModal", headerShown: false
          }} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
