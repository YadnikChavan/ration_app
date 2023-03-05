import React from "react";
import { Box, Text, View, VStack } from "native-base";
import Colors from "../Colors";
import Buttone from "..components/Buttone";

function NotVerifiedScreen() {
  return (
    <Box flex={1} bg={Colors.main} safeAreaTop>
      <VStack space={6} px={5} alignItems="center">
        <Buttone bg={Colors.black} color={Colors.white}>
          REGISTER
        </Buttone>
        <Buttone bg={Colors.white} color={Colors.black}>
          REGISTER
        </Buttone>
      </VStack>
    </Box>
  );
}

export default NotVerifiedScreen;
