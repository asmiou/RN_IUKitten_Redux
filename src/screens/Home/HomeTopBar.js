import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { MaMenuIcon } from "../../../assets/icons";
import {connect} from 'react-redux';

const HomeTopBar=(props)=>{
    const navigation = useNavigation();

    const renderDrawerAction = () => (
        <TopNavigationAction
          icon={MaMenuIcon}
          onPress={() => navigation.openDrawer()}
        />
      );
    

    const SubTitle=()=>{
      return(
        <Text category="h4">
            {props.locale}
        </Text>
    )}

    return (
        <TopNavigation
          subtitle={SubTitle}
          alignment="start"
          appearance="default"
          accessoryLeft={renderDrawerAction}
        />    
    )
}

const mapStateToProps=(store)=>{
  return {
    locale: store.locale.agency
  }
}

export default connect(mapStateToProps,null)(HomeTopBar);