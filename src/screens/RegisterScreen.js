import React from "react";
import {
  Text,
  Box,
  Heading,
  VStack,
  Input,
  Button,
  Pressable,
} from "native-base";
import { MaterialIcons, Ionicons, FontAwesome } from "@expo/vector-icons";
import Colors from "../Colors";

function RegisterScreen({ navigation }) {
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
        <Heading>SIGN UP</Heading>
        <VStack space={8} pt="6">
          <Input
            InputLeftElement={
              <FontAwesome name="user" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="Username"
            w={"70%"}
            pl={2}
            color={Colors.main}
            borderBottomColor={Colors.underline}
          />

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
          SIGN UP
        </Button>

        <Pressable mt={4} onPress={() => navigation.navigate("Login")}>
          <Text color={Colors.deepestGray}>LOGIN</Text>
        </Pressable>
      </Box>
    </Box>
  );
}

export default RegisterScreen;
