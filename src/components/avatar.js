import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { DynamicStyleSheet, DynamicValue, useDynamicValue } from 'react-native-dynamic';
import {
    Avatar,
    Layout,
    Text,
    Button
  } from "@ui-kitten/components";
  import { MaMenuCloseIcon } from "../../assets/icons";

const UserAvatar=(props)=>{
    const styles = useDynamicValue(themedStyles);

    return (
      <Layout style={styles.headerContainer}>
        <View style={styles.profileContainer}>
          <Avatar size="giant" source={require("../../assets/avatar.jpg")} />
          <Text style={styles.profileName}>{props.user.fullname}</Text>
          <Button
            style={styles.profileName}
            appearance="ghost"
            accessoryLeft={MaMenuCloseIcon}
            
            onPress={() => props.navigation.closeDrawer()}
          />
        </View>
      </Layout>
    );
    
}

const mapStateToProps = (state) => ({
    user:state.user.details
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAvatar)

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
  });
  