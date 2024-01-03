import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {React, useEffect} from 'react';

import styles from './ProductDetails.styles';
import LeftIcon from 'react-native-vector-icons/Octicons';
import Icons from 'react-native-vector-icons/SimpleLineIcons';

import Rating from '../../components/StarsRating';
import Swiper from 'react-native-swiper';

import HeartIcon from 'react-native-vector-icons/Ionicons';

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

  console.log(product);

  return (
    <ScrollView style={styles.deatilsContainer}>
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
        <Text style={styles.heading}>{product.title}</Text>
        <Text style={[styles.heading, {fontWeight: 'bold', marginBottom: 10}]}>
          {product.brand}
        </Text>
        <Rating rating={product.rating} />
      </View>

      <View
        style={{
          marginTop: 10,
          height: 250,
          paddingHorizontal: 0,
          width: '100%',
        }}>
        <Swiper
          style={styles.wrapper2}
          dotColor="#CCC"
          activeDotColor="#F9B023"
          paginationStyle={{
            flexDirection: 'row',
            position: 'absolute',
            bottom: 10,
            left: 10,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
          loop={true}
          autoplay={true}
          showsPagination={true}
          dotStyle={{
            width: 25,
            height: 7,
            borderRadius: 42,
          }}
          activeDotStyle={{
            width: 25,
            height: 7,
            borderRadius: 4,
          }}>
          {imagesOfProduct.map((img, index) => (
            <View key={index} style={styles.slide}>
              <Image
                source={{uri: img}}
                style={{
                  flex: 1,
                  width: '100%',
                  height: '90%',
                }}
                resizeMode="cover"
              />
              <TouchableOpacity style={styles.addToFavoritesButton}>
                <HeartIcon size={28} name="heart-outline" />
              </TouchableOpacity>
            </View>
          ))}
        </Swiper>
      </View>

      <View
        style={{
          marginTop: 14,
          display: 'flex',
          flexDirection: 'row',
          gap: 14,
          alignItems: 'center',
        }}>
        <Text
          style={{fontSize: 18, color: '#2A4BA0'}}>{`$${product.price}`}</Text>
        <View
          style={{
            height: 34,
            backgroundColor: '#2A4BA0',
            width: 124,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 17,
          }}>
          <Text style={{color: '#fff'}}>{product.discountPercentage}% OFF</Text>
        </View>
      </View>

      <View style={styles.actionButtonContainer}>
        <TouchableOpacity
          style={[
            styles.actionButtons,
            {borderColor: '#2A4BA0', borderWidth: 2},
          ]}>
          <Text style={{color: '#2A4BA0', fontSize: 14, fontWeight: 600}}>
            Add To Cart
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButtons, {backgroundColor: '#2A4BA0'}]}>
          <Text style={{color: '#FFF', fontSize: 14, fontWeight: 600}}>Buy Now</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginVertical: 5, paddingBottom: 8}}>
        <Text style={{ color: '#1E222B', fontSize: 16, fontWeight: 400}}>Details</Text>

        <Text style={{ fontSize: 16, lineHeight: 26}}>{product?.description}</Text>
      </View>
    </ScrollView>
  );
};

export default ProductDetails;
