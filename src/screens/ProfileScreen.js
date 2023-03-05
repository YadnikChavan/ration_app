import React from "react";
import { Text, View, Center, Image, Heading } from "native-base";
import Colors from "../Colors";
import Tabs from "../components/Profile/Tabs";

function ProfileScreen() {
  return (
    <>
      <Center bg={Colors.main} pt={10} pb={6}>
        <Image
          source={{
            uri: "https://toppng.com/uploads/preview/file-svg-profile-icon-vector-11562942678pprjdh47a8.png",
          }}
          alt="profile"
          w={24}
          h={24}
          resizeMode="contain"
        />
        <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
          Admin Doe
        </Heading>
        <Text italic fontSize={10} color={Colors.white}>
          Joined Dec 12 2022
        </Text>
      </Center>
      <Tabs />
    </>
  );
}

export default ProfileScreen;
