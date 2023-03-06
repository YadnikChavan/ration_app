import React, { useState } from "react";
import {
  Heading,
  HStack,
  Image,
  ScrollView,
  Spacer,
  Text,
  View,
} from "native-base";
import Rating from "../components/Rating";
import NumericInput from "react-native-numeric-input";
import Colors from "../Colors";
import Buttone from "../components/Buttone";
import Review from "../components/Review";
import { useNavigation } from "@react-navigation/native";

function SingleProductScreen({ route }) {
  const [value, setValue] = useState(0);
  const navigation = useNavigation();
  const product = route.params.product;
  const data = route.params.data;
  return (
    <ScrollView px={5} showsVerticalScrollIndicator={false}>
      <Image
        source={{
          uri: product.images,
        }}
        alt="Image"
        w={"full"}
        h={300}
        resizeMode="contain"
      />
      <Heading bold fontSize={15} mb={2} lineHeight={22}>
        {product.brand}
      </Heading>
      <Rating value={product.rating} />
      <HStack space={2} alignItems="center" my={5}>
        {product.countInStock > 0 ? (
          <NumericInput
            value={value}
            onChange={(e) => setValue(e)}
            totalWidth={140}
            totalHeight={30}
            iconSize={25}
            step={1}
            maxValue={product.countInStock}
            minValue={0}
            borderColor={Colors.deepGray}
            rounded
            textColor={Colors.black}
            iconStyle={{ color: Colors.white }}
            rightButtonBackgroundColor={Colors.main}
            leftButtonBackgroundColor={Colors.main}
          />
        ) : (
          <Heading bold color={Colors.red} italic fontSize={12}>
            Out of Stock
          </Heading>
        )}
        <Spacer />
        <Heading bold color={Colors.black} fontSize={19}>
          Rs.{product.price}
        </Heading>
      </HStack>
      <Text lineHeight={24} fontSize={12}>
        {product.description}
      </Text>
      <Buttone
        onPress={() => navigation.navigate("Cart")}
        bg={Colors.main}
        color={Colors.white}
        mt={10}
      >
        ADD TO CART
      </Buttone>
      <Review data={data} />
    </ScrollView>
  );
}

export default SingleProductScreen;
