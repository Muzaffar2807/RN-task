import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import styles from './Home.styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/SimpleLineIcons';
import SearchBar from '../../components/SearchBar';

import ArrowDownIcon from 'react-native-vector-icons/MaterialIcons';
import OffersCard from '../../components/OffersCard';

const Home = ({navigation}) => {
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.searchContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.userName}>Hey, Rahul</Text>

          <TouchableOpacity>
            <View>
              <Icons name="handbag" size={22} color="#fff" />
            </View>
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

      <View style={styles.recommendedContainer}></View>
    </View>
  );
};

export default Home;
