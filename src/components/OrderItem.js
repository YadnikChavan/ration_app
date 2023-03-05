import {
  View,
  Text,
  FlatList,
  Pressable,
  Box,
  HStack,
  Center,
  Image,
  VStack,
  Button,
} from "native-base";
import React from "react";
import Colors from "../Colors";
import products from "../data/Products";

const OrderItem = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable>
          <Box mb={3}>
            <HStack
              alignItems={"center"}
              bg={Colors.white}
              shadow={1}
              rounded={10}
              overflow="hidden"
            >
              <Center w={"25%"} bg={Colors.deepGray}>
                <Image
                  source={{ uri: item.images }}
                  w="full"
                  h={24}
                  resizeMode="contain"
                  alt={item.brand}
                />
              </Center>
              <VStack w={"60%"} px={2}>
                <Text isTruncated color={Colors.black} bold fontSize={12}>
                  {item.brand}
                </Text>
                <Text color={Colors.lightBlack} mt={2} bold>
                  Rs.{item.price}
                </Text>
              </VStack>
              <Center>
                <Button
                  bg={Colors.main}
                  _pressed={{ bg: Colors.main }}
                  _text={{ color: Colors.white }}
                >
                  5
                </Button>
              </Center>
            </HStack>
          </Box>
        </Pressable>
      )}
    >
      <Text>PlaceOrderModel</Text>
    </FlatList>
  );
};

export default OrderItem;
