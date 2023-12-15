import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
  
import BottomNavigation from './BottomNavigation'; 
 

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

const AppNavigation = () => {
  return (
    <Stack.Navigator>
         
       <Stack.Screen name='MainHome' component={BottomNavigation} options={screenOptionStyle} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
