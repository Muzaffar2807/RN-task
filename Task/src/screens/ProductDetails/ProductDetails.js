import {View, Text, TouchableOpacity, Image} from 'react-native';
import {React, useEffect} from 'react';

import styles from './ProductDetails.styles';
import LeftIcon from 'react-native-vector-icons/Octicons';
import Icons from 'react-native-vector-icons/SimpleLineIcons';

import Rating from '../../components/StarsRating';
import Swiper from 'react-native-swiper';

const ProductDetails = ({route, navigation}) => {
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

  const product = route.params.product;
  const imagesOfProduct = product.images;

  console.log(imagesOfProduct);

  return (
    <View style={styles.deatilsContainer}>
      <View style={styles.deatilsHeader}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <LeftIcon name="chevron-left" color="#000" size={18} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.cartButton}>
          <Icons name="handbag" size={22} color="#000" />
        </TouchableOpacity>
      </View>

      <View>
        <Text>{product.title}</Text>
        <Text>{product.brand}</Text>

        <Rating rating={product.rating} />
      </View>

      <View style={{marginTop: 30, height: 400}}>
        <Swiper style={styles.wrapper2} dotColor="#FFFFFF" loop={false}> 
        {imagesOfProduct.map((img, index) => (
            <View key={index} style={styles.slide}>
              <Image
                source={{uri: img}}
                style={{
                  flex: 1,
                  width: '100%',
                  height: '100%',
                  borderRadius: 10,
                }}
                resizeMode="contain"
              />
            </View>
          ))}  
        </Swiper>
      </View> 
    </View>
  );
};

export default ProductDetails;
