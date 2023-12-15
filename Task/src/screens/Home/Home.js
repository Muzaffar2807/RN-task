import {View, Text} from 'react-native';
import React from 'react';

import styles from './Home.styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.test}>Home here</Text>

      <TouchableOpacity onPress={() => {
        navigation.navigate('Productdetails');
      }}>
        <Text>Go</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
