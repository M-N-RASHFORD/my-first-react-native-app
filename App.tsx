import React, { useState } from 'react';
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './Screens/Home';
import Details from './Screens/Details';
import Lists from './Screens/Lists';

const App = () => {
    const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <stack.Navigator initialRouteName="home">
            <stack.Screen name="home" component={Home}/>
            <stack.Screen name="details" component={Details}/>
            <stack.Screen name="lists" component={Lists}/>
        </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
