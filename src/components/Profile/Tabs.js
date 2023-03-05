import { Text } from "native-base";
import React, { useState } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import Colors from "../../Colors";
import Orders from "./Orders";
import Profile from "./Profile";

export default function Tabs() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "PROFILE" },
    { key: "second", title: "ORDERS" },
  ]);

  const renderScene = SceneMap({
    first: Profile,
    second: Orders,
  });

  const renderTabsBar = (props) => (
    <TabBar
      {...props}
      tabStyle={style.tabStyle}
      indicatorStyle={{ backgroundColor: Colors.black }}
      activeColor={Colors.main}
      inactiveColor={Colors.white}
      renderLabel={({ route, color }) => (
        <Text style={{ color, ...style.text }}>{route.title}</Text>
      )}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabsBar}
    />
  );
}

const style = StyleSheet.create({
  tabStyle: {
    backgroundColor: "black",
  },
  text: {
    fontSize: 13,
    fontWeight: "bold",
  },
});
