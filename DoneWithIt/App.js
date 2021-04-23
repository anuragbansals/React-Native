import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View, Image, SafeAreaView, Button } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelomeScreen from './app/screens/WelomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppButton from './app/components/AppButton';

export default function App() {
    return <WelomeScreen/>

}
