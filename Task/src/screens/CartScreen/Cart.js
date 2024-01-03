import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect} from 'react';

import LeftIcon from 'react-native-vector-icons/Octicons';

import styles from './Cart.styles';

const Cart = ({navigation}) => {

  //hiding bottom navigator
  useEffect(() => {
    navigation
      .getParent()
      ?.setOptions({tabBarStyle: {display: 'none'}, tabBarVisible: false});
    return () =>
      navigation
        .getParent()
        ?.setOptions({tabBarStyle: undefined, tabBarVisible: undefined});
  }, [navigation]);

  return (
    <View style={styles.cartContainer}>

      <View style={styles.cartHeading}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <LeftIcon name="chevron-left" color="#000" size={18} />
        </TouchableOpacity>
        <Text style={{color: '#000', fontSize: 16, fontWeight: 400}}>
          Shoppping Cart (5)
        </Text>
      </View>

      <ScrollView>
        <View> 
          
        </View>
      </ScrollView>
    </View>
  );
};

export default Cart;
