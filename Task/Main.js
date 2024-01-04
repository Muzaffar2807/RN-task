import {SafeAreaView, View, Text} from 'react-native';
import React from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import {NavigationContainer} from '@react-navigation/native';

const Main = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <AppNavigation />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default Main;
