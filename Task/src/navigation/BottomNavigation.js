import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import ProductDetails from '../screens/ProductDetails';


const Tab = createBottomTabNavigator();

const screenOptionStyle = {
  headerShown: false,
};

function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{ 
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="ProductDetails" component={ProductDetails} />
    </Tab.Navigator>
  );
}

export default BottomNavigation
