import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#F0EFEB'}}>
      <Text style={{ fontFamily: 'Roboto', letterSpacing: 7, fontSize: 50, fontWeight: 'bold', paddingTop: 51, color: '#4E4E42'}}>
        re fashion</Text>
      <Text style={{ fontFamily: 'Roboto-Light', fontSize: 24, paddingTop: 200, color: '#000'}}>
        your score</Text>
      <Text style={{ fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 50, paddingTop: 10, color: '#000'}}>
        100</Text>
    </View>

  );
}
export default HomeScreen;