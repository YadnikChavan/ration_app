import React, { useState } from "react";
import {
  Text,
  Box,
  Heading,
  VStack,
  Input,
  Button,
  Pressable,
} from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons, Ionicons, FontAwesome } from "@expo/vector-icons";
import Colors from "../Colors";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

function RegisterScreen({ route }) {
  const navigation = useNavigation();
  const data = route.params;
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Box flex={1} bg={Colors.white}>
      <Box
        w="full"
        h={"full"}
        position={"absolute"}
        top="0"
        px={"6"}
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
            value={username}
            onChangeText={(e) => setUsername(e)}
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
            if (username == "" || email == "" || password == "") {
              Alert.alert("Missing Credentials", "Enter all credentails");
            } else {
              data.login.username = username;
              data.login.email = email;
              data.login.password = password;
              console.log(JSON.stringify(data));
              navigation.navigate("Bottom", data);
            }
          }}
        >
          SIGN UP
        </Button>

        <Pressable
          mt={4}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text color={Colors.deepestGray}>LOGIN</Text>
        </Pressable>
      </Box>
    </Box>
  );
}

export default RegisterScreen;
