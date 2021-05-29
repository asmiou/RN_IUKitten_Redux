import {
  BottomNavigation,
  BottomNavigationTab,
  Divider,
} from "@ui-kitten/components";

import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import {
  MaHomeIcon,
  FaSearchDollarIcon,
  FaCommentDotsIcon,
  FaWalletIcon,
} from "../../assets/icons";
import { ifIphoneX } from "react-native-iphone-x-helper";
const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
  <>
    <Divider />
    <BottomNavigation
      appearance="default"
      indicatorStyle={style.indicator}
      selectedIndex={state.index}
      style={style.container}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
    >
      <BottomNavigationTab title="Home" icon={MaHomeIcon} />
      <BottomNavigationTab title="Transferts" icon={FaSearchDollarIcon} />
      <BottomNavigationTab title="Revenus" icon={FaWalletIcon} />
      <BottomNavigationTab title="Assistance" icon={FaCommentDotsIcon} />
    </BottomNavigation>
  </>
);

export const BottomTabsNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen name="Home" component={Home} />
    <Screen name="Transfer" component={Home} />
    <Screen name="Revenue" component={Home} />
    <Screen name="Assistance" component={Home} />
  </Navigator>
);

const style = StyleSheet.create({
  container: {
    ...ifIphoneX(
      {
        marginBottom: 0,
      },
      {
        marginBottom: 0,
      }
    ),
  },

  indicator: {
    backgroundColor: "#f4623a",
  },
});
