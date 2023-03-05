import { useNavigation } from "@react-navigation/native";
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
  Modal,
} from "native-base";
import React, { useState } from "react";
import Colors from "../Colors";
import products from "../data/Products";
import Buttone from "./Buttone";

const OrderInfos = [
  {
    title: "Products",
    price: 125.77,
    color: Colors.black,
  },
  {
    title: "Shipping",
    price: 34.0,
    color: Colors.black,
  },
  {
    title: "Tax",
    price: 23.34,
    color: Colors.black,
  },
  {
    title: "Total Amount",
    price: 125.77,
    color: Colors.main,
  },
];

const OrderModel = () => {
  const navigation = useNavigation();
  const [showModel, setShowModel] = useState(false);
  return (
    <Center>
      <Buttone
        onPress={() => setShowModel(true)}
        bg={Colors.main}
        color={Colors.white}
        mt={5}
      >
        SHOW PAYMENT & TOTAL
      </Buttone>
      <Modal isOpen={showModel} onClose={() => setShowModel(false)} size="lg">
        <Modal.Content maxWidth={350}>
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              {OrderInfos.map((i, index) => (
                <HStack
                  key={index}
                  alignItems={"center"}
                  justifyContent="space-between"
                >
                  <Text fontWeight={"medium"}>{i.title}</Text>
                  <Text color={i.color} bold fontSize={12}>
                    Rs. {i.price}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Pressable
              w={"full"}
              justifyContent="center"
              bg={Colors.paypal}
              h={45}
              onPress={() => {
                setShowModel(false);
              }}
              rounded={5}
              overflow="hidden"
            >
              <Image
                source={require("../../assets/favicon.png")}
                alt="paypal"
                resizeMode="contain"
                w={"full"}
                h={30}
              />
            </Pressable>
            <Button
              w={"full"}
              mt={2}
              bg={Colors.black}
              h={45}
              _text={{
                color: Colors.white,
              }}
              onPress={() => {
                navigation.navigate("Bottom");
                setShowModel(false);
              }}
              _pressed={{
                bg: Colors.black,
              }}
            >
              PAY LATER
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default OrderModel;
