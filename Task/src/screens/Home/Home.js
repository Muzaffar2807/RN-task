import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './Home.styles';
import Icons from 'react-native-vector-icons/SimpleLineIcons';
import SearchBar from '../../components/SearchBar';

import ArrowDownIcon from 'react-native-vector-icons/MaterialIcons';
import OffersCard from '../../components/OffersCard';
import ProductCard from '../../components/ProductCard';
import ProductListing from '../../components/ProductListing';

import {ScrollView} from 'react-native-virtualized-view';
import {useSelector} from 'react-redux';

const Home = ({navigation}) => {
  const cartItems = useSelector(state => state.CartReducer);

  return (
    <ScrollView style={styles.mainWrapper}>
      <View style={styles.searchContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.userName}>Hey, Rahul</Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CartScreen');
            }}
            style={{
              display: 'flex',
              position: 'relative',
            }}>
            {cartItems && cartItems.length > 0 ? (
              <View
                style={{
                  backgroundColor: 'red',
                  alignItems: 'center',
                  position: 'absolute',
                  top: -8,
                  left: 16,
                  width: 20,
                  height: 20,
                  borderRadius: 50,
                  display: 'flex',
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#fff', fontSize: 12}}>
                  {cartItems?.length}
                </Text>
              </View>
            ) : (
              <></>
            )}

            <Icons name="handbag" size={26} color="#fff" />
          </TouchableOpacity>
        </View>

        <View>
          <SearchBar />
        </View>

        <View style={styles.deliveryAddress}>
          <View style={styles.deliveryContainer}>
            <View>
              <Text style={styles.addressHeading}>DELIVERY TO</Text>
              <Text style={styles.addressTextSize}>Green WAy 3000, Sylhet</Text>
            </View>
            <TouchableOpacity>
              <ArrowDownIcon
                name="keyboard-arrow-down"
                size={18}
                color="#B2BBCE"
              />
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.addressHeading}>WITHIN</Text>
            <View style={styles.deliveryContainer}>
              <Text style={styles.addressTextSize}>1 Hour</Text>

              <TouchableOpacity>
                <ArrowDownIcon
                  name="keyboard-arrow-down"
                  size={18}
                  color="#B2BBCE"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.offersContainer}>
        <OffersCard />
      </View>

      <View style={styles.recommendedContainer}>
        <Text style={styles.textHeading}>Recommended</Text>

        <ProductListing />
      </View>
    </ScrollView>
  );
};

export default Home;
