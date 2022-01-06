import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View, Text, Button } from "react-native";

import ListScreen from "../screens/ListScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {

  const [list, setList] = useState([]);

  return (
    <NavigationContainer>
      <Text>{typeof(list)}</Text>
      <Stack.Navigator
       initialRouteName="Home"
       screenOptions={{
         headerStyle: { backgroundColor: '#bf4' }, 
         headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen
         name="HomeScreen"
         component={HomeScreen}
         options={{title: 'Keep notas'}}
         list={list}
        />
        <Stack.Screen
         name="ListScreen"
         component={ListScreen}
         options={{title: 'Notas'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}