import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
 
import Home from '../screens/Home/Home'; 
import BottomNavigation from './BottomNavigation'; 
 

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
         
       <Stack.Screen name='MainHome' component={BottomNavigation} options={{ headerShown: false}} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
