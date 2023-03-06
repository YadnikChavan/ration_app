import { useNavigation } from "@react-navigation/native";
import { Box, FormControl, Input, ScrollView, Text, VStack } from "native-base";
import React, { useState } from "react";
import { Alert } from "react-native";
import Colors from "../../Colors";
import Buttone from "../Buttone";

export default function Profile({ data }) {
  const navigation = useNavigation();

  const [username, setUsername] = useState(data.login.username);
  const [email, setEmail] = useState(data.login.email);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const Inputs = [
    {
      label: "USERNAME",
      type: "text",
      value: username,
      onChange: (e) => setUsername(e),
    },
    {
      label: "EMAIL",
      type: "text",
      value: email,
      onChange: (e) => setEmail(e),
    },
    {
      label: "NEW PASSWORD",
      type: "password",
      value: password,
      onChange: (e) => setPassword(e),
    },
    {
      label: "CONFIRM PASSWORD",
      type: "password",
      value: confirm,
      onChange: (e) => setConfirm(e),
    },
  ];

  return (
    <Box h="full" bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10}>
          {Inputs.map((i, index) => (
            <FormControl key={index}>
              <FormControl.Label
                _text={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: Colors.black,
                }}
              >
                {i.label}
              </FormControl.Label>
              <Input
                borderColor={Colors.main}
                borderWidth={1}
                bg={Colors.subGreen}
                py={3}
                type={i.type}
                color={Colors.main}
                fontSize={20}
                _focus={{
                  bg: Colors.subGreen,
                  borderColor: Colors.main,
                  borderWidth: 1,
                }}
                value={i.value}
                onChangeText={i.onChange}
              />
            </FormControl>
          ))}
          <Buttone
            onPress={(e) => {
              if (password == "" || password != confirm) {
                Alert.alert(
                  "Invalid Credentials",
                  "Your Email or Password has not matched"
                );
              } else {
                data.login.username = username;
                data.login.email = email;
                data.login.password = password;
                setPassword("");
                setConfirm("");
                navigation.navigate("Profile", data);
                Alert.alert(
                  "Updated Successfully",
                  "Details has been updated successfully"
                );
              }
            }}
            bg={Colors.main}
            color={Colors.white}
          >
            UPDATE PROFILE
          </Buttone>
        </VStack>
      </ScrollView>
    </Box>
  );
}
