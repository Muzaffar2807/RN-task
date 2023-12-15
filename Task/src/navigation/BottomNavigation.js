import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
 
import Categories from '../screens/Categories/Categories';
import Favourite from '../screens/Favourites/Favourite';
import More from '../screens/More/More';
import HomeStack from './HomeStack';

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
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Favourite" component={Favourite} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
}

export default BottomNavigation
