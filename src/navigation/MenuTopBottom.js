import React from "react";
import {
  Layout,
  Drawer,
  DrawerItem,
  IndexPath,
  Text
} from "@ui-kitten/components";
import { FaSwapIcon, MaInfoIcon, MaCreditCardIcon, MaLogoutIcon, MaUserIcon } from "../../assets/icons";
import { BottomTabsNavigator } from "./bottomTab";
import { SafeAreaView } from "react-native-safe-area-context";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import { DynamicStyleSheet, DynamicValue, useDynamicValue } from 'react-native-dynamic';
import { connect } from 'react-redux';
import UserAvatar from '../components/avatar';

//Navigator left
const { Navigator, Screen } = createDrawerNavigator();

const SideLeftMenu = ({ navigation, state }) => {
  const styles = useDynamicValue(themedStyles);
  const AvatarTop =()=>(<UserAvatar navigation={navigation}/>)

  return (
    <SafeAreaView style={{...styles.safeAreaProvider}}>
      <Drawer
        header={AvatarTop}
        appearance='default'
        selectedIndex={new IndexPath(state.index)}
        onSelect={(index) => navigation.navigate(state.routeNames[index.row])}
      >
        <DrawerItem title="Mon profile" accessoryLeft={MaUserIcon} />
        <DrawerItem title='virements' accessoryLeft={FaSwapIcon}/>
        <DrawerItem title='Compte de paiement' accessoryLeft={MaCreditCardIcon}/>
        <DrawerItem title="About" accessoryLeft={MaInfoIcon} />
        <DrawerItem title="Déconnexion" accessoryLeft={MaLogoutIcon} />
      </Drawer>
      <Layout>
          <Text style={styles.version} appearance='hint' category="c2">© @asmiou - V1.0.0</Text>
      </Layout>
    </SafeAreaView>
  );
};

const MenuTopBottom = () => (
  <Navigator drawerContent={(props) => <SideLeftMenu {...props} />}>
    <Screen name="Home" component={BottomTabsNavigator} />
    <Screen name="Profile" component={Home} />
    <Screen name="Virement" component={Home} />
    <Screen name="Account" component={Home} />
    <Screen name="About" component={Home} />
    <Screen name="Logout" component={Home} />
  </Navigator>
);

const mapStateToProps=(store)=>{
  return {
    user: store.user.details
  }
}

export default connect(mapStateToProps,null)(MenuTopBottom);

const themedStyles = new DynamicStyleSheet({
  headerContainer: {
    height:60,
    backgroundColor: new DynamicValue('#616161','#D7D7D7'),
    paddingHorizontal:15,
    marginTop:8
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileName: {
    marginHorizontal: 16,
    color: new DynamicValue('#F3F3F3','#242424'),
  },
  icon: {
    width: 22,
    height: 22,
    marginRight: 8,
  },
  safeAreaProvider:{
    backgroundColor: new DynamicValue('#EEEEEE','#2d2d2d'),
    height:"100%"
  },
  version:{
    paddingHorizontal:20
  }
});
