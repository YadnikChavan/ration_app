import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Flex,
  HStack,
  Text,
  Input,
  Pressable,
  ScrollView,
  Image,
  Heading,
} from "native-base";
import React from "react";
import Colors from "../Colors";
import products from "../data/Products";
import Rating from "./Rating";

function HomeProducts({ data }) {
  const navigation = useNavigation();
  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      <Flex
        flexWrap={"wrap"}
        direction="row"
        justifyContent={"space-between"}
        px={6}
      >
        {products.map((product) => (
          <Pressable
            onPress={() =>
              navigation.navigate("Single", { product: product, data: data })
            }
            key={product.id}
            w="47%"
            bg={Colors.white}
            rounded="md"
            shadow={2}
            pt={0.3}
            my={3}
            pb={2}
            overflow="hidden"
          >
            <Image
              source={{ uri: product.images }}
              alt={product.brand}
              w="full"
              h={24}
              resizeMode="contain"
            />
            <Box px={4} pt={1}>
              <Heading size={"sm"} bold>
                Rs.{product.price}
              </Heading>
              <Text fontSize={10} mt={1} isTruncated w="full">
                {product.brand}
              </Text>
              <Rating value={product.rating} />
            </Box>
          </Pressable>
        ))}
      </Flex>
    </ScrollView>
  );
}

export default HomeProducts;
