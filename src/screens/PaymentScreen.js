import React from "react";
import {
  Box,
  Center,
  FormControl,
  HStack,
  Image,
  Input,
  ScrollView,
  Text,
  View,
  VStack,
} from "native-base";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Colors from "../Colors";
import Buttone from "../components/Buttone";
import { useNavigation } from "@react-navigation/native";

const paymetnMethods = [
  {
    image: require("../../assets/favicon.png"),
    alt: "paypal",
    icon: "Ionicons",
  },
  {
    image: require("../../assets/favicon.png"),
    alt: "discover",
    icon: "fontAwesome",
  },
  {
    image: require("../../assets/favicon.png"),
    alt: "googlepay",
    icon: "fontAwesome",
  },
];

function PaymentScreen() {
  const navigation = useNavigation();
  return (
    <Box flex={1} safeArea bg={Colors.main} py={5}>
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          Payment Methods
        </Text>
      </Center>

      <Box h={"full"} bg={Colors.subGreen} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {paymetnMethods.map((i, index) => (
              <HStack
                key={index}
                px={3}
                py={1}
                rounded={10}
                bg={Colors.white}
                justifyContent="space-between"
                alignItems={"center"}
              >
                <Box>
                  <Image
                    source={i.image}
                    alt={i.alt}
                    resizeMode="contain"
                    w={60}
                    h={50}
                  />
                </Box>
                {i.icon === "Ionicons" ? (
                  <Ionicons
                    name="checkmark-circle"
                    size={30}
                    color={Colors.main}
                  />
                ) : (
                  <FontAwesome
                    name="circle-thin"
                    size={30}
                    color={Colors.main}
                  />
                )}
              </HStack>
            ))}
            <Buttone
              onPress={() => navigation.navigate("PlaceOrder")}
              bg={Colors.main}
              color={Colors.white}
            >
              CONTINUE
            </Buttone>
            <Text italic textAlign={"center"}>
              Payment method is{" "}
              <Text italic bold>
                Paypal
              </Text>{" "}
              by default
            </Text>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}

export default PaymentScreen;
