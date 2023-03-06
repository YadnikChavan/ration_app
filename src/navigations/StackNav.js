import { View, Text } from "react-native";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SingleProductScreen from "../screens/SingleProductScreen";
import ShippingScreen from "../screens/ShippingScreen";
import PaymentScreen from "../screens/PaymentScreen";
import PlaceOrderScreen from "../screens/PlaceOrderScreen";

const Stack = createNativeStackNavigator();

const StackNav = ({ route }) => {
  const data = route.params;
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" initialParams={data} component={HomeScreen} />
      <Stack.Screen
        name="Single"
        initialParams={data}
        component={SingleProductScreen}
      />
      <Stack.Screen
        name="Shipping"
        initialParams={data}
        component={ShippingScreen}
      />
      <Stack.Screen
        name="Checkout"
        initialParams={data}
        component={PaymentScreen}
      />
      <Stack.Screen
        name="PlaceOrder"
        initialParams={data}
        component={PlaceOrderScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
