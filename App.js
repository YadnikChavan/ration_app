import React from "react";
import { NativeBaseProvider, Text, Box } from "native-base";
import HomeScreen from "./src/screens/HomeScreen";
export default function App() {
  return (
    <NativeBaseProvider>
      <HomeScreen />
    </NativeBaseProvider>
  );
}
