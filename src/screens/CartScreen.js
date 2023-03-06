import { useNavigation } from "@react-navigation/native";
import { Box, Button, Center, HStack, ScrollView, Text } from "native-base";
import React from "react";
import Colors from "../Colors";
import Buttone from "../components/Buttone";
import CartEmpty from "../components/CartEmpty";
import CartItems from "../components/CartItems";

function CartScreen({ route }) {
  const navigation = useNavigation();
  const data = route.params;
  console.log("CART :::" + JSON.stringify(data));
  return (
    <Box flex={1} safeAreaTop bg={Colors.subGreen}>
      <Center w={"full"} py={5}>
        <Text color={Colors.black} fontSize={20} bold>
          Cart
        </Text>
      </Center>
      {/* <CartEmpty /> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <CartItems />
        <Center mt={5}>
          <HStack
            rounded={50}
            justifyContent="space-between"
            bg={Colors.white}
            shadow={2}
            w="90%"
            pl={5}
            h={45}
            alignItems={"center"}
          >
            <Text>TOTAL</Text>
            <Button
              px={10}
              h={45}
              rounded={50}
              bg={Colors.main}
              _text={{ color: Colors.white, fontWeight: "semibold" }}
              _pressed={{ bg: Colors.main }}
            >
              Rs.356
            </Button>
          </HStack>
        </Center>

        <Center px={5}>
          <Buttone
            onPress={() => navigation.navigate("Shipping")}
            bg={Colors.black}
            color={Colors.white}
            mt={10}
          >
            CHECKOUT
          </Buttone>
        </Center>
      </ScrollView>
    </Box>
  );
}

export default CartScreen;
