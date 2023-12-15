import { View, Text } from 'react-native'
import React from 'react'

import {createStackNavigator} from '@react-navigation/stack';

import ProductDetails from '../screens/ProductDetails/ProductDetails';
import Cart from '../screens/CartScreen/Cart';
import Home from '../screens/Home/Home';

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Homescreen" component={Home} />
      <Stack.Screen name="Productdetails" component={ProductDetails} />
      <Stack.Screen name="CartScreen" component={Cart} />
    </Stack.Navigator>
  );
}

export default HomeStack