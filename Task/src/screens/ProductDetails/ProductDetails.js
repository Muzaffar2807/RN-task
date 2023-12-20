import {View, Text} from 'react-native';
import {React, useEffect} from 'react';

import styles from './ProductDetails.styles';

const ProductDetails = ({navigation}) => {
 /*  useEffect(() => {
    navigation
      .getParent()
      ?.setOptions({tabBarStyle: {display: 'none'}, tabBarVisible: false});
    return () =>
      navigation
        .getParent()
        ?.setOptions({tabBarStyle: undefined, tabBarVisible: undefined});
  }, [navigation]); */

  return (
    <View>
      <Text onPress={() => navigation.goBack()}>Back</Text>
      <Text>ProductDetails</Text>
    </View>
  );
};

export default ProductDetails;
