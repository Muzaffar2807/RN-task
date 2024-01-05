import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import React, {useEffect} from 'react';

import LeftIcon from 'react-native-vector-icons/Octicons';
import PlusIcon from 'react-native-vector-icons/AntDesign';

import styles from './Cart.styles';
import {useSelector} from 'react-redux';

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

  const cartItems = useSelector(state => state.CartReducer);
 
  return (
    <ScrollView style={styles.cartContainer}>
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View style={styles.cartHeading}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}>
              <LeftIcon name="chevron-left" color="#000" size={18} />
            </TouchableOpacity>
            <Text
              style={{
                color: '#000',
                fontSize: 16,
                fontFamily: 'Manrope-Medium',
              }}>
              Shoppping Cart ({cartItems?.length})
            </Text>
          </View>

          {/* CartItem */}
          <View>
            {cartItems && cartItems.length > 0 ? (
              <>
                {cartItems.map((product, index) => (
                  <View style={styles.cartItems} key={index}>
                    <View style={styles.leftCartItem}>
                      <Image
                        source={{
                          uri: product?.thumbnail,
                        }}
                        resizeMode="cover"
                        style={{width: 62, height: 62, borderRadius: 8}}
                      />
                    </View>

                    <View style={styles.cartItemNames}>
                      <Text
                        style={{
                          color: '#1E222B',
                          fontSize: 16,
                          fontFamily: 'Manrope-SemiBold',
                        }}>
                        {product?.title}
                      </Text>
                      <Text
                        style={{
                          color: '#1E222B',
                          fontSize: 14,
                          fontFamily: 'Manrope-Regular',
                        }}>
                        {`$${product?.price}`}
                      </Text>
                    </View>

                    <View style={styles.buttonContainer}>
                      <TouchableOpacity style={styles.backButton}>
                        <PlusIcon name="minus" size={16} color="#000" />
                      </TouchableOpacity>

                      <View>
                        <Text
                          style={{
                            color: '#1E222B',
                            fontFamily: 'Manrope-Bold',
                          }}>
                          1
                        </Text>
                      </View>
                      <TouchableOpacity style={styles.backButton}>
                        <PlusIcon name="plus" size={16} color="#000" />
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </>
            ) : (
              <View>
                <Text>No Product in cart</Text>
              </View>
            )} 
          </View>

          <View style={{marginLeft: 'auto'}}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#2A4BA0',
                  fontSize: 14,
                  fontFamily: 'Manrope-Medium',
                }}>
                Edit
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* procced to checkout */}
        <View style={styles.checkoutContainer}>
          <View
            style={{
              backgroundColor: '#F8F9FB',
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            }}>
            <View
              style={{
                display: 'flex',
                gap: 14,
                paddingVertical: 20,
              }}>
              <View style={styles.flexRow}>
                <Text style={styles.priceHeadingText}>Subttotal</Text>

                <Text style={styles.priceText}>$35.96</Text>
              </View>

              <View style={styles.flexRow}>
                <Text style={styles.priceHeadingText}>Delivery</Text>

                <Text style={styles.priceText}>$3</Text>
              </View>

              <View style={styles.flexRow}>
                <Text style={styles.priceHeadingText}>Total</Text>

                <Text style={styles.priceText}>$38.96</Text>
              </View>
            </View>

            <TouchableOpacity
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 56,
                borderRadius: 20,
                marginBottom: 30,
                backgroundColor: '#2A4BA0',
                marginHorizontal: 14,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#FFF',
                  fontFamily: 'Manrope-Bold',
                }}>
                Proceed To checkout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Cart;
