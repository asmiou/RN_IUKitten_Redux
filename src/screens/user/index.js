import React from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import dynamicStyles from './../../styles';
import { useDynamicValue } from 'react-native-dynamic';

export default function User({navigation}) {
    const styles = useDynamicValue(dynamicStyles);

    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content" hidden = {false} backgroundColor = "#898C95" translucent = {false}/>
            <View style={styles.container}>
                <Text style={styles.text}>User component</Text>
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} title="Go to home" onPress={()=>navigation.navigate("Home")}/>
                </View>
            </View>
        </SafeAreaView>
    )
}
