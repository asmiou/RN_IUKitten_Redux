import React from "react";
import MenuTopBottom from "./MenuTopBottom";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { MaterialIconsPack } from "../styles/MaterialIcons-icons";
import { FontAweSomeIconsPack } from "../styles/FontAwesome-icons";
import { isIphoneX } from 'react-native-iphone-x-helper';
import { useDarkMode, useDynamicValue } from 'react-native-dynamic';
import { default as themeLight } from '../styles/light-theme.json';
import { default as themeDark } from '../styles/dark-theme.json';
import { default as mapping } from '../styles/mapping.json';
import dynamicStyles from '../styles';
import { connect } from 'react-redux';

const { Navigator, Screen } = createStackNavigator();

const AppNavigator = (props) => {
  const styles = useDynamicValue(dynamicStyles);
  //const theme = props.settings.darkTheme;

  const isDarkMode = isIphoneX()? useDarkMode(): false;
  
  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        hidden={false}
        translucent={false}
      />
      <IconRegistry icons={[MaterialIconsPack, FontAweSomeIconsPack]} />

      <ApplicationProvider
        {...eva}
        customMapping={mapping}
        theme={
          isDarkMode
            ? { ...eva.dark, ...themeDark }
            : { ...eva.light, ...themeLight }
        }
      >
        <SafeAreaProvider style={{ ...styles.safeAreaProvider }}>
          <SafeAreaView style={{ ...styles.container }}>
            <NavigationContainer>
              <Navigator
                headerMode="none"
                screenOptions={{ headerShown: false }}
              >
                <Screen name={"Menu"} component={MenuTopBottom} />
              </Navigator>
            </NavigationContainer>
          </SafeAreaView>
        </SafeAreaProvider>
      </ApplicationProvider>
    </>
  );
};

const mapStateToProps=(store)=>{
  return {
    settings: store.settings
  }
}

export default connect(mapStateToProps,null)(AppNavigator)
