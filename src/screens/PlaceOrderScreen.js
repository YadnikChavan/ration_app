import React from "react";
import { Box, Heading, ScrollView, Text, View } from "native-base";
import Colors from "../Colors";
import OrderInfo from "../components/OrderInfo";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import PlaceOrderModel from "../components/PlaceOrderModel";
import OrderItem from "../components/OrderItem";

function PlaceOrderScreen() {
  return (
    <Box bg={Colors.subGreen} flex={1} safeAreaTop pt={6}>
      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <OrderInfo
            title={"CUSTOMER"}
            subTitle="Admin"
            text={"admin@e.com"}
            icon={
              <FontAwesome5
                name="shipping-fast"
                size={30}
                color={Colors.white}
              />
            }
          />
          <OrderInfo
            title={"DELIVER TO"}
            subTitle="Address:"
            text={
              "Irure est laboris irure non adipisicing velit culpa ullamco ullamco id et nulla."
            }
            icon={
              <Ionicons name="location-sharp" size={30} color={Colors.white} />
            }
          />
        </ScrollView>
      </Box>
      <Box px={6} flex={1} pb={3}>
        <Heading bold fontSize={15} isTruncated my={4}>
          PRODUCTS
        </Heading>
        <OrderItem />
        <PlaceOrderModel />
      </Box>
    </Box>
  );
}

export default PlaceOrderScreen;
