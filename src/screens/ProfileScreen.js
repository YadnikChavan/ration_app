import React from "react";
import { Text, View, Center, Image, Heading } from "native-base";
import Colors from "../Colors";
import Tabs from "../components/Profile/Tabs";

function ProfileScreen({ route }) {
  const data = route.params;
  return (
    <>
      <Center bg={Colors.main} pt={10} pb={6}>
        <Image
          source={require("../../assets/images/profile-icon-png-899.png")}
          alt="profile"
          w={24}
          h={24}
          resizeMode="contain"
        />
        <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
          {data.login.username}
        </Heading>
        <Text italic fontSize={10} color={Colors.white}>
          {data.login.email}
        </Text>
      </Center>
      <Tabs data={data} />
    </>
  );
}

export default ProfileScreen;
