import { Box } from "native-base";
import React from "react";
import Colors from "../Colors";
import HomeSearch from "../components/HomeSearch";
import HomeProducts from "../components/HomeProducts";

function HomeScreen({ route }) {
  const data = route.params;

  return (
    <Box flex={1} bg={Colors.subGreen}>
      <HomeSearch />
      <HomeProducts data={data} />
    </Box>
  );
}

export default HomeScreen;
