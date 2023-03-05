import React from "react";
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

function LoginScreen({ navigation }) {
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
          onPress={() => navigation.navigate("Bottom")}
        >
          LOGIN
        </Button>

        <Pressable mt={4} onPress={() => navigation.navigate("Register")}>
          <Text color={Colors.deepestGray}>SIGN UP</Text>
        </Pressable>
      </Box>
    </Box>
  );
}

export default LoginScreen;
