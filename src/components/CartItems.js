import React from "react";
import {
  Box,
  Pressable,
  HStack,
  Text,
  Center,
  Image,
  VStack,
  Button,
} from "native-base";
import { SwipeListView } from "react-native-swipe-list-view";
import products from "../data/Products";
import Colors from "../Colors";
import { FontAwesome } from "@expo/vector-icons";

const Swiper = () => (
  <SwipeListView
    right0penValue={-50}
    previewRowKey="0"
    previewopenValue={-40}
    previewopenDelay={3000}
    data={products}
    keyExtractor={(item) => item.id}
    renderItem={renderitem}
    renderHiddenItem={hiddenitems}
    showsVerticalScrollIndicator={false}
    onRowDidOpen={(i) => console.debug(i)}
  />
);

const renderitem = (data) => (
  <Pressable>
    <Box ml={6} mb={3}>
      <HStack
        alignItems="center"
        bg={Colors.white}
        shadow={1}
        rounded={10}
        overflow="hidden"
      >
        <Center w={"25%"} bg={Colors.deepGray}>
          <Image
            source={{ uri: data.item.images }}
            alt={data.item.brand}
            w="full"
            h={24}
            resizeMode="contain"
          />
        </Center>
        <VStack w={"60%"} px={2} space={3}>
          <Text isTruncated color={Colors.black} bold fontSize={13}>
            {data.item.brand}
          </Text>
          <Text bold color={Colors.lightBlack}>
            Rs.{data.item.price}
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
);

const hiddenitems = () => (
  <Pressable
    w={50}
    roundedTopRight={10}
    roundedBottomRight={10}
    h="88%"
    ml={"auto"}
    justifyContent="center"
    bg={Colors.red}
  >
    <Center alignItems={"center"} space={2}>
      <FontAwesome name="trash" size={24} color={Colors.white} />
    </Center>
  </Pressable>
);

const CartItems = () => {
  return (
    <Box mr={6}>
      <Swiper />
    </Box>
  );
};

export default CartItems;
