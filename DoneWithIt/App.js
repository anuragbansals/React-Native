// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet} from "react-native";

// import { StyleSheet, Text, TouchableWithoutFeedback, View, Image, SafeAreaView, Button } from 'react-native';
// import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
// import WelomeScreen from './app/screens/WelomeScreen';
// import ViewImageScreen from './app/screens/ViewImageScreen';
// import AppButton from './app/components/AppButton';
// import HelloScreen from './app/practice/screens/HelloScreen'


export default function App() {
    return (
        <>
            <View style={styles.container}>
                {/* <HelloScreen /> */}
            </View>
        </>
    );
    

}


const styles = StyleSheet.create({
    container: {
        // alignItems: "center",
        // justifyContent: "center",
        flex: 1,
        backgroundColor: "yellow",
        // paddingTop: 40
        // left: 10
    }
})
