import {View, Text} from 'react-native';
import React from 'react';

import styles from './Home.styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = ({navigation}) => {
  return (
    <View>
      <Text style={styles.test}>Home here</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Productdetails');
        }}>
        <Text>Go</Text>
        <MaterialCommunityIcons name="home" size={22} color="green" />
      </TouchableOpacity>
    </View>
  );
};

export default Home;
