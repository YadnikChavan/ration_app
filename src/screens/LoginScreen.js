import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Input,
  Pressable,
  Text,
  View,
  VStack,
} from "native-base";
import Colors from "../Colors";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Alert } from "react-native";

const data = {
  login: {
    username: "Chetna",
    email: "chetna@des.edu",
    password: "12345",
  },
  cart: {
    items: [
      {
        quantity: 2,
        item: {
          id: "1",
          brand: "Almonds",
          description:
            "Premium badam from Dmart's brand, Premia. Almonds are loaded with nutrients and are known to have multiple health benefits.",
          price: 669,
          rating: 3.5,
          images:
            "https://res.cloudinary.com/dr6b27ms2/image/upload/v1678063072/almonds_lxscj3.png",
          countInStock: 9,
        },
      },
    ],
    shipping: {},
    payment: {
      mode: "",
    },
  },
};
const showAlert = () =>
  Alert.alert("Invalid Credentials", "Your Email or Password has not matched");

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState(data.login.email);
  const [password, setPassword] = useState(data.login.password);

  return (
    <Box flex={1} bg={Colors.white}>
      <Box
        w="full"
        h={"full"}
        position={"absolute"}
        top="0"
        px={"6"}
        ś
        justifyContent={"center"}
      >
        <Heading>LOGIN</Heading>
        <VStack space={8} pt="6">
          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="user@email.com"
            w={"70%"}
            pl={2}
            color={Colors.main}
            borderBottomColor={Colors.underline}
            value={email}
            onChangeText={(e) => setEmail(e)}
          />

          <Input
            InputLeftElement={
              <Ionicons name="eye" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="**********"
            w={"70%"}
            type="password"
            pl={2}
            color={Colors.main}
            borderBottomColor={Colors.underline}
            value={password}
            onChangeText={(e) => setPassword(e)}
          />
        </VStack>

        <Button
          _pressed={{
            bg: Colors.main,
          }}
          my={30}
          w="40%"
          rounded={50}
          bg={Colors.main}
          onPress={() => {
            console.log(email);
            console.log(data.login.email);
            if (email != data.login.email || password != data.login.password) {
              console.log("INVALID");
              showAlert();
            } else {
              navigation.navigate("Bottom", data);
            }
          }}
        >
          LOGIN
        </Button>

        <Pressable mt={4} onPress={() => navigation.navigate("Register", data)}>
          <Text color={Colors.deepestGray}>SIGN UP</Text>
        </Pressable>
      </Box>
    </Box>
  );
}

export default LoginScreen;
